import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
