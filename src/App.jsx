import "./App.css";
import Buttons from "./assets/components/Buttons";
import Images from "./assets/components/Images";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <h1 className="">React Day 1</h1>
    <div className = "d-flex flex-wrap gap-4 me-2 justify-content-center align-items-center mb-3">
      <Buttons name="Cliccami"/>
      <Buttons name="Cliccami2"/>
      <Buttons name="Cliccami3"/>
      <Buttons name="Cliccami4"/>
      <Buttons name="Cliccami5"/>
    </div>
    <div className="d-flex flex-wrap gap-4 justify-content-center align-items-center">  
      <Images className="" src="https://placecats.com/200/200" alt="immagineGatto"/>
      <Images className="" src="https://placecats.com/200/200" alt="immagineGatto"/>
      <Images className="" src="https://placecats.com/200/200" alt="immagineGatto"/>
      <Images className="" src="https://placecats.com/200/200" alt="immagineGatto"/>
      <Images className="" src="https://placecats.com/200/200" alt="immagineGatto"/>
    </div>
    </>
  );
}

export default App;
