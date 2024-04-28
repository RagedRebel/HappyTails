import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Searchbar from './Searchbar.jsx'
import './app.css'
import dog from "./assets/germanshepherd.jpeg";
import cat from "./assets/cat.jpeg";


function App(){
  return(
    <>
      <Header/>
      <Searchbar/>
      <Card img={dog} pet="Dog" breed="German Shepherd"/>
      <Card img={cat} pet="Cat" breed="Tuxedo"/>
      <Footer/>
    
    
  </>
  );
}
export default App
