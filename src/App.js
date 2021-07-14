import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import StoreLocator from "./views/StoreLocator";
import ContactUs from "./views/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Social from "./components/Floating Social/Social";
import Distributor from "./components/Distributor/Distributor";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Router>
        <Social />
        <Sidebar isOpen={isOpen} toggle={toggleNav} />
        <Navbar toggle={toggleNav} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/store-locator" component={StoreLocator} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/distributor" component={Distributor} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
