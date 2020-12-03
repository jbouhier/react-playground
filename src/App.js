import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Main } from "./components/Main"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h1>SuperApp</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>  
      </Router>    
    </div>
  );
}

export default App;