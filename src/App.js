import './Custom.css';
import About from './component/About';
import Banner from './component/Banner';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
// import LoadMore from './component/Posts';
import Portfolio from './component/Portfolio';
import Services from './component/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      {/* <LoadMore/> */}
      <Footer/>
    </div>
  );
}

export default App;
