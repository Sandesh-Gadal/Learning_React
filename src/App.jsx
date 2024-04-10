import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Useeffect from './Useeffect';
import Posts from './Posts';

function App() {
 

  return (
     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h1>This is About Page</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path ='/useeffect' element ={<Useeffect/>}/>
        <Route path= '*' element={<h1>page not found</h1>}/> */}


        {/* nexted route */}
        {/* <Route path = "/dashboard">
          <Route index element={"dashboard"}/>
             <Route path='analytics' element={"Dasboard analyticd"}/>
             <Route path='change-password' element={"Change passowrd"}/>
          </Route> */}
 
          {/* dynamic routes */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<h1>This is About Page</h1>
         }/>
          <Route path='home/contact' element={<Contact/>}/>
         <Route path='/posts/:id' element={<Posts/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
