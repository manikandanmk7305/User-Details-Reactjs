import {Route,Routes} from 'react-router-dom';
import { Home } from './component/Home';
import { About } from './component/About';
import { Navbar } from './component/Navbar';
import { Service } from './component/Service';
import { Product } from './component/Product';
import { Users } from './component/Users';
import {Most} from './component/Most';
import {New} from './component/New';
import { Userdel } from './component/Userdel';
import { Nomatch } from './component/Nomatch';
import { Order } from './component/Order';
import { Profile } from './component/Profile';
import { Login } from './component/Login';
import {Signup} from './component/Signup';
import { Auth } from './component/Auth';
function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/*' element={<Nomatch/>}/>
        <Route path='/order' element={<Order/>}/>
        
        <Route path='/product' element={<Product/>}>
          <Route index element={<Most/>}/>
          <Route path = 'most' element={<Most/>}/>
          <Route path = 'new' element={<New/>}/>
        </Route>

        <Route path='/users' element={<Users/>}/>
          <Route path=':userId' element={<Userdel/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile>
          <Profile/>
        </Profile>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
