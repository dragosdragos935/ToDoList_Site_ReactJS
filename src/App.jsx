// import InlineComponent from "./components/InlineComponent";
// import OutLineComponent from "./components/OutLineComponent";
import ToDo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
      {/* <InlineComponent />
      <OutLineComponent /> */}
    </div>
  );
}

export default App;
