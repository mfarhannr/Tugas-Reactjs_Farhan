import './App.css';
import Tugas6 from "./tugas6/tugas6";
// import Welcome from "./WelcomeComponent";
import Tugas7 from './tugas7/tugas7';


function App() {
  return (
    <div className="App">
        <Tugas6 />
        <Tugas7
          name="Muhammad Farhan Nurrahmat Latif"
          email="farhan@gmail.com"
          kelas="XII"
        />
    </div>
  );
}

export default App;
