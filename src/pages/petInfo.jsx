import Petdesc from "../components/pet_desc";
import Footer from "../components/Footer";
import { useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import supabase from "../Supabase.jsx";

function Petinfo(){
  const {id}=useParams()
  const navigate=useNavigate()

  const[pet,setPet]=useState(null)

  useEffect(()=>{
    const fetchPet=async () =>{
      const {data,error}=await supabase
      .from('pets')
      .select()
      .eq('id',id)
      .single()
    
    if (error){
      navigate('/home',{replace:true})

    }

    if (data){
      setPet(data)
      console.log(data)

    }
    }
  fetchPet()
  },[id,navigate])


    return(
      <>   
      {pet &&<Petdesc key={pet.id} pet={pet}/>} 
      <Footer/> 
    </>
    );

}
export default Petinfo