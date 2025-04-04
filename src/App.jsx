import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptons/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <NavBar></NavBar>
      <h1 className="text-7xl bg-rose-600">Vite + React</h1>
    <PriceOptions></PriceOptions>
      

      
    </>
  );
}

export default App;
