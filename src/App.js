import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <>
      <h1 className="header">Welcome to Episode 014</h1>
      <p className="text">
        How to pass data from Children component to Paren ?
      </p>
      <ParentComponent />
    </>
  );
}

export default App;
