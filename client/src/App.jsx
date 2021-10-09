import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/home.hoc";

// Component
import Temp from "./components/temp";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />    
    </>
  );
}

export default App;