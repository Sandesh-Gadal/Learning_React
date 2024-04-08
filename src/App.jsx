import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Useeffect from './Useeffect';

function App() {
 

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h1>This is About Page</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path ='/useeffect' element ={<Useeffect/>}/>
        <Route path= '*' element={<h1>page not found</h1>}/>
        <Route path = "/dashboard">
          <Route index element={"dashboard"}/>
             <Route path='analytics' element={"Dasboard analyticd"}/>
             <Route path='change-password' element={"Change passowrd"}/>
          </Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
