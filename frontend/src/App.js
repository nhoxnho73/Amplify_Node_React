import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Navbar
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar click={() => setSideToggle(true)}/>
        {/* SideDrawer */}
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        {/* Backdrop */}
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
        {/* HomeSreen */}
        {/* ProductSreen */}
        {/* CartSreen */}
      </Router>
    </div>
  );
}

export default App;
