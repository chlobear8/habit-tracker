import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TrackerWrapper } from "./components/TrackerWrapper";
import { ProgressBar } from "./components/ProgressBar";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TrackerWrapper />
        </Route>
        {/* <Route path="/tracker/:trackerId">
          <Tracker />
        </Route> */}
        <Route path="/progress/:trackerId">
          <ProgressBar />
        </Route>
      </Switch>
    </Router>
  )
};