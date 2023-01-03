import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import FruitsPage from '../FruitsPage/FruitsPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import HomePage from '../../pages/HomePage/HomePage';



function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])
  
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/> 
      {
        user ?
          <Routes>
            <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
         :
         <Routes>
         <Route path="/" element={<HomePage />}/>
           <Route path="/users/login" element={<LoginForm setUser={setUser}/>}/>
           <Route path="/users/signup" element={<SignUpForm />}/>
         </Routes>
      }
    </main>
  );
}

export default App;

