import './Custom.css';
import About from './component/About';
import Banner from './component/Banner';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Services from './component/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
