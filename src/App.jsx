import "./App.css";
import Buttons from "./assets/components/Buttons";
import Images from "./assets/components/Images";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <h1 className="mb-3">React Day 1</h1>
    <div className = "d-flex flex-wrap gap-4 me-2 justify-content-center align-items-center mb-3">
      <Buttons name="Cliccami"/>
      <Buttons name="Cliccami2"/>
      <Buttons name="Cliccami3"/>
      <Buttons name="Cliccami4"/>
      <Buttons name="Cliccami5"/>
    </div>
    <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">  
      <Images className="" src="https://placecats.com/300/300" alt="gatto1"/>
      <Images className="" src="https://placecats.com/300/301" alt="gatto2"/>
      <Images className="" src="https://placecats.com/300/302" alt="gatto3"/>
      <Images className="" src="https://placecats.com/300/303" alt="gatto4"/>
      <Images className="" src="https://placecats.com/300/305" alt="gatto5"/>
    </div>
    </>
  );
}

export default App;
