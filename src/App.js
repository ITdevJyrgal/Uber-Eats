import React  from "react"
import './App.css';
import Header from "./components/header/header"
import Names from "./components/main/names";
import Footer from "./components/footer/footer";
import About from './companents2/about/about'
function App() {

  return (
      <div>
          <Header/>
          <Names/>
          <Footer/>
          <About/>
      </div>

  );
}

export default App;