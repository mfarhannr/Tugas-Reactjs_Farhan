import './App.css';
import Tugas6 from "./tugas6/tugas6";
// import Welcome from "./WelcomeComponent";
import Tugas7 from './tugas7/tugas7';
import Tugas8 from "./tugas8/tugas8";
import Tugas9

function App() {
  return (
    <div className="App">
        <Tugas6 />
        <Tugas7
          name="Muhammad Farhan Nurrahmat Latif"
          email="farhan@gmail.com"
          kelas="XII"
      />
      <Tugas8 />
    </div>
  );
}

export default App;
