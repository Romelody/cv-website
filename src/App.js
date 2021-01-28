import logo from './logo.svg';
import Header from './components/Header.js'
import Intro from './components/Intro.js'
import About from './components/About'
import MyWork from './components/MyWork'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <Intro/>
        <About/>
        <MyWork/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
