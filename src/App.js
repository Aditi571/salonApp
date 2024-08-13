import ColorServices from "./components/ColorServices";
import HairCutting from "./components/HairCutting";
import NavBar from "./components/Navbar";
import ServiceList from "./components/ServiceList";
import Styling from "./components/Styling";

function App() {
  return (
    <div className="App ">
      <div className="flex flex-col mt-5 ml-10">
      <NavBar /> 
      <div id="featured">
        <ServiceList />
      </div>
      <div id="haircutting">
        <HairCutting />
      </div>
      <div id="styling">
        <Styling />
      </div>
      <div id="color-services">
        <ColorServices />
      </div>
      </div>
    </div>
  );
}

export default App;
