import './App.css';
// import Welcome from "./WelcomeComponent";
import Tugas6 from "./tugas6/tugas6";
import Tugas7 from './tugas7/tugas7';
import Tugas6 from './tugas8/tugas8';

function App() {
  return (
    <div className="App">
      {/* <div className="Card6"> */}
        <Tugas6 />
      {/* </div> */}
      {/* <div className="Card7"> */}
        <Tugas7
          name="Muhammad Farhan Nurrahmat Latif"
          email="farhan@gmail.com"
          kelas="XII"
        />
      {/* </div> */}
      <Tugas8 />
    </div>
  );
}

export default App;
