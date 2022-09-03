import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddCake = () => {
    const [form,setForm]=useState({})
    const navigate=useNavigate()
    
const sendCake=(event)=>{
   
    event.preventDefault()
        fetch('https://nameless-anchorage-63339.herokuapp.com/',{
             //fetch('http://localhost:4000/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(() => navigate('/'))
        .catch(err=>console.error(err))
    
}
const handleForm=(event)=>{
setForm({...form,[event.target.name]:event.target.value})
}
  return (
    <div className='add-cake'>
      <form className="add-form">
        <h1 id="add-h1">Add Cake</h1>
        <label htmlFor=''>Cake Name:</label>
        <input onChange={event=>handleForm(event)} type='text' placeholder="ex.Napoleon" name='name' id="name" />

        <label htmlFor=''>Cake image:</label>
        <input onChange={event=>handleForm(event)} type='text' placeholder="ex. http//:" name='image' id="image"/>

        <label htmlFor=''>Ingredients:</label>
        <input className='ingredients' onChange={event=>handleForm(event)} type='text' placeholder="ex. 2 tbsp of sugar" name='ingredients' id="ingredients" />

        <label htmlFor=''>Price:</label>
        <input onChange={event=>handleForm(event)} type='number' min={0.00}placeholder="ex. 2.59" name='price' id="price"/>

        <label htmlFor=''>Weight:</label>
        <input onChange={event=>handleForm(event)} type='number' min={0.00} placeholder="ex. 23.56" name='weight' id="weight"/>
       <br/>
       <br/>
      <button className="cake-btn" onClick={event=>sendCake(event)}>Add Cake</button>
      </form>
    </div>
  )
}
export default AddCake