import SideBar from "./compenents/LeftSide/SideBar";
import RightSide from "./compenents/RightSide/RightSide";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="App__SideBar">
        <SideBar />
      </div>
      <div className="App__RightSide">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
