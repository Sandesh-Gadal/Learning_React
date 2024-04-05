import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';

function App() {
 

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h1>This is About Page</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
