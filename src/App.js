import logo from './logo.svg';
import './App.css';
import './bootstrapC.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
