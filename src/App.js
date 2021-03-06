import { BrowserRouter as Powder, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Home/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Powder>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>

            <Route path='/addService'>
              <AddService></AddService>
            </Route>

            <Route path='/manageServices'>
              <ManageServices></ManageServices>
            </Route>


            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Powder>
      </AuthProvider>
    </div>
  );
}

export default App;
