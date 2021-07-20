import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Simple } from "./Component/simple";
import { AllListItems } from "./Component/ListiItems/AllListItems";

function App() {
     return (
          <div className="App bg-red-200">
               <AllListItems />
          </div>
     );
}

export default App;
