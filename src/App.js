import './Custom.css';
import About from './component/About';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
