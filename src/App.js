import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home.tsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
