import Petdesc from "../components/pet-desc";
import Footer from "../components/Footer";
import { useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import supabase from "../Supabase";

function Petinfo(){
  const {id}=useParams()
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [breed,setBreed]=useState('')
  const [type,setType]=useState('')
  const [img,setImg]=useState('')

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
      setName(data.name)
      setBreed(data.breed)
      setType(data.type)
      setImg(data.img)
      console.log(data)

    }
    }
  fetchPet()
  },[id,navigate])





    return(
      <>
      
      <Footer/> 
    </>
    );

}
export default Petinfo