import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MenuBar from "./components/MenuBar.jsx";
function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route exact path="/" component={MenuBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
