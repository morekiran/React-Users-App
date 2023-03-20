import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddNewUse from './pages/AddNewUser/AddNewUse';
import DashBoard from './pages/dashboard/DashBoard';
import EditNewUser from './pages/editNeewUser/EditNewUser';

function App() {
  return (
    <div className='reactUsers'>
      <h1>REACT USERS APP</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='addNewUser' element={<AddNewUse/>}/>
        <Route path='*'
        element={
        <>
        <h1 style={{color:"red"}}>Error 404! - The page you're looking for does not exists!</h1>
        <button>Go Back To Home</button>
        </>
        }/>
        <Route path='editNewUser' element={<EditNewUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
