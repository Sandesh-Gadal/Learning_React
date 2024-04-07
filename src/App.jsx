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
      </Routes>
     </BrowserRouter>
  )
}

export default App;
