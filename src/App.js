import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="others" />
      </form>
    </div>
  );
}

export default App;
