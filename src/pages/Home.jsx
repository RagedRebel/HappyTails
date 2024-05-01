import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Searchbar from '../components/Searchbar.jsx'
import '../app.css'
import supabase from '../Supabase.jsx';
import {useState, useEffect} from 'react'

function Home(){

  const [fetchError, setfetchError]=useState(null)
  const [pets, setPets]=useState(null)

  useEffect(()=>{
    const fetchpets=async()=>{
      const {data,error}=await supabase
      .from('pets')
      .select()

      if (error){
        setfetchError('Could not fetch data')
        setpets(null)
        console.log(error)
      }
      if(data){
        setPets(data)
        setfetchError(null)
      }
    }

    fetchpets()
  },[])

    return(
      <>
        <Header/>
        <Searchbar/>
        {fetchError && (<p>{fetchError}</p>)}
        {pets  &&(
          <div >
          {pets.map(data =>(
            <Card key={data.id} pet={data}/>) 
          )}</div>
        )}
        <Footer/>      
    </>
    );
  }
  export default Home
  