import './App.css';
import { FooterPage } from './Components/FooterPage/FooterPage';
import HeaderPage from './Components/Header/HeaderPage';
import { NavbarPage } from './Components/NavbarPage/NavbarPage';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import { Section3 } from './Components/Section3/Section3';
import { Section4 } from './Components/Section4/Section4';
import { Section5 } from './Components/Section5/Section5';

function App() {
  return (
    <>
      <div className='header'>
        <NavbarPage/>
        <HeaderPage/>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <FooterPage/>
    </>
  );
}

export default App;
