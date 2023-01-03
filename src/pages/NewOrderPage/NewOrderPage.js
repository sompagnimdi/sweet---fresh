import { getCategories } from "../../utilities/categories-service";
import { useEffect, useState } from "react";

export default function NewOrderPage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((cats) => {
      console.log(cats);
      setCategories(cats);
    });
  }, []);

  return (
    <div>
      <h1>NewOrderPage</h1>

      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
