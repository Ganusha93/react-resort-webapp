import './App.css';
import { Route, Switch } from "react-router-dom"
import  Home  from "./pages/Home";
import  Rooms  from "./pages/Rooms";
import  SingleRoom  from "./pages/SingleRoom";
import  Error  from "./pages/Error";
import  NavBar  from "./components/NavBar"
import Menu from './pages/Menu';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route  exaxt path="/menu" component={Menu}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
