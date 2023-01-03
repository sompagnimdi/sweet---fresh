const Category = require('../../models/category')

const dataController = {
  // Index,
  index (req, res, next) {
    Category.find({}, (err, foundCategories) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.categories = foundCategories
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Category.findByIdAndDelete(req.params.id, (err, deletedCategory) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.category = deletedCategory
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.readyToEat = req.body.readyToEat === 'on'
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCategory) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.category = updatedCategory
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.readyToEat = req.body.readyToEat === 'on'
   
    Category.create(req.body, (err, createdCategory) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.category = createdCategory
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Category.findById(req.params.id, (err, foundCategory) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a category with that ID'
        })
      } else {
        res.locals.data.category = foundCategory
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.categories)
    },
    show (req, res, next) {
      res.json(res.locals.data.category)
    }
  }

module.exports = { dataController, apiController }
