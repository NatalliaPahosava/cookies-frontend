import { useState } from "react"

const AddCake = () => {
    const [form,setForm]=useState({})
    
const sendCake=(event)=>{
    // const newCake={name:'gdgdgd'}
    event.preventDefault()
        fetch(process.env.REACT_APP_API_ENDPOINT,{
            // fetch('http://localhost:4000',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))
    
}
const handleForm=(event)=>{
setForm({...form,[event.target.name]:event.target.value})
}
  return (
    <div className='container'>
      <form className="add-form">
        <h1>Add Cake</h1>
        <label htmlFor=''>Cake Name:</label>
        <input onChange={event=>handleForm(event)} type='text' placeholder="ex.Napoleon" name='name' id="name" />

        <label htmlFor=''>Cake image:</label>
        <input onChange={event=>handleForm(event)} type='text' placeholder="ex. http//:" name='image' id="image"/>

        <label htmlFor=''>Ingedients:</label>
        <input className='ingredients' onChange={event=>handleForm(event)} type='text' placeholder="ex. 2 tbsp of sugar" name='ingedients' id="ingedients" />

        <label htmlFor=''>Price:</label>
        <input onChange={event=>handleForm(event)} type='number' min={0}placeholder="ex. 2.59" name='price' id="price"/>

        <label htmlFor=''>Weight:</label>
        <input onChange={event=>handleForm(event)} type='number' min={0} placeholder="ex. 23.56" name='weight' id="weight"/>
        <button onClick={event=>sendCake(event)}>Add Cake</button>
      </form>
      
    </div>
  )
}
export default AddCake