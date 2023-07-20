import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import About from './components/About/About';
import Header from './components/Headers/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />

      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
