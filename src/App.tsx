import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Simple } from "./Component/simple";
import { AllListItems } from "./Component/ListiItems/AllListItems";
import { MailSection } from "./Component/MatlerSection/matilSection";

function App() {
     return (
          <div className="App bg-white-200">
               <AllListItems />
               <MailSection />
          </div>
     );
}

export default App;
