import './App.css';
z
// import Welcome from "./WelcomeComponent";
import Tugas7 from './tugas7/tugas7';

function App() {
  return (
    <div className="App">
      <div className="Card6">
        <Tugas6 />
      </div>
      <div className="Card7">
        <Tugas7
          name="Muhammad Farhan Nurrahmat Latif"
          email="farhan@gmail.com"
          kelas="XII"
        />
      </div>
    </div>
  );
}

export default App;
