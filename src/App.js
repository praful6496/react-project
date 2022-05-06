import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollButton from './component/pages/ScrollButton';
import Subscribr from './component/pages/Subscribr';
import Welcom from './component/pages/Welcom';
import About from './component/pages/About';
import Service from './component/pages/Service';
import Team from './component/pages/Team';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';
import Menubar from './component/pages/Menubar';

function App() {
  return (
    <>
      <Menubar />
      <Subscribr />
      <Welcom />
      <About />
      <Service />
      <Team />
      <Contact />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
