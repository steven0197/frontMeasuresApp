import {
  Switch,
  Redirect,
  Route
} from "react-router-dom";


import SideLayoutRouter from "./components/layouts/side.layout";

import FormPage from "./pages/FormPage";
import AboutUsPage from "./pages/AboutUsPage";
import Instructions from "./pages/Instructions";



const AppRouter = () => {

  return (
    <Switch>
      
      <Route exact path="/"><Redirect to="/form" /></Route>
      <SideLayoutRouter path="/form" component={FormPage} />
      <SideLayoutRouter path="/instructions" component={Instructions} />
      <SideLayoutRouter path="/aboutus" component={AboutUsPage} />
      
    </Switch>
  )
}

export default AppRouter;
