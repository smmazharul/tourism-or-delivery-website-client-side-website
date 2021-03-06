
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';


import AuthProvider from './Contexts/AuthProvider';
import Header from './component/Header/Header';
import AboutUs from './Pages/AboutUs';
import AddService from './Pages/AddService';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Service from './Pages/Service';
import MyOder from './Pages/MyOder';
import ManageOrder from './Pages/ManageOrder';
import PrivateRoute from './Route/PrivateRoute';
import Homes from './Pages/Homes';
import Footer from './Pages/Footer';
import Shipping from './Pages/Shipping';
import Congratulation from './Pages/Congratulation';
import DeleteService from './Pages/DeleteService';
import NotFound from './Pages/NotFound';

// import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <AuthProvider>
            <Router>
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                
                <Route path="/about">
                  <AboutUs></AboutUs>
                </Route>
                <PrivateRoute path="/service">
                  <Service></Service>
                </PrivateRoute>
                <Route path="/manageOrder">
                  <ManageOrder></ManageOrder>
                </Route>
                <Route path="/deleteService">
                  <DeleteService></DeleteService>
                </Route>
                <PrivateRoute path="/myOrder">
                  <MyOder></MyOder>
                </PrivateRoute>
                <Route path="/shipping">
                  <Shipping></Shipping>
                </Route>
                <Route path="/congratulation">
                  <Congratulation></Congratulation>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/newService">
                  <AddService></AddService>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
               
              </Switch>
              <Footer></Footer>
            </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
