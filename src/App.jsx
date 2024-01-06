import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Services/Services";
import Value from "./components/Value/Value";
import Video from "./components/Video/Video";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Video />
        <Hero />
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
