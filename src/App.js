import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Logout from "./login/Logout";
import Login from "./login/Login";
import Home from "./home/Home.tsx";
import UserDetails from './userDetails/UserDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user/view" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
