import "./App.css";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Qualification from "./component/qualification/Qualification";
import Skills from "./component/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Footer /> 
      </main>
    </>
  );
}

export default App;
