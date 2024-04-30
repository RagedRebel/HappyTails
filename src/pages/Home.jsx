import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Searchbar from '../components/Searchbar.jsx'
import dog from "../assets/germanshepherd.jpeg";
import cat from "../assets/cat.jpeg";
import '../app.css'

function Home(){
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
  export default Home
  