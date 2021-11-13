import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './App.css'

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <SideBar/>
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
