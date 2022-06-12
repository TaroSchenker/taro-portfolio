import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
    <Navbar />
     <Intro />
     {/* <AboutMe />   */}
     {/* <Portfolio /> */}
    </div>
  );
}

export default App;
