import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Upload from "./components/Upload";
import { ImageProvider } from "./context/Imagecontext";

export default function App() {
  return (
    <ImageProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Upload />
            </Route>
            <Route path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </div>
      </Router>
    </ImageProvider>
  );
}
