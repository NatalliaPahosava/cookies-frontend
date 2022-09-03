import { useState } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'

const SingleCake = () => {
    const[form,setForm]=useState({})
    const[showForm,setShowForm]=useState(false)
    const location = useLocation()
    const navigate=useNavigate()
    const { name, image, price, weight, ingredients } = location.state
    const handleDelete = (event) => {
        event.preventDefault()
         fetch(`https://nameless-anchorage-63339.herokuapp.com/?name=${name}`, {
          // fetch(`http://localhoast:4000?name=${name}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(() => navigate('/'))
            .catch(err => console.error(err))
    }
    const handleUpdate = (event) => {
    event.preventDefault()
    fetch(`https://nameless-anchorage-63339.herokuapp.com/?name=${name}`, {
        //fetch(`http://localhost:4000?name=${name}`, {  
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err))
  }

  const handleForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <div className='single-product'>
        <h1>{name}</h1>
        <img src={image} alt=''/>
        <p>
          <b>Ingredients:</b>{ingredients}
        </p>
        <p>
          <b>Price:</b>{price}$
        </p>
        <p>
          <b>Weight:</b>{weight} pounds
        </p>
        {showForm && (
        <form className='add-form'>
          <h1>Add Cake</h1>
          <label htmlFor=''>Cake Name:</label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex.Napoleon'
            name='name'
            id='name'
            defaultValue={name}
          />

          <label htmlFor=''>Cake image:</label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex. http//:'
            name='image'
            id='image'
            defaultValue={image}
          />

          <label htmlFor=''>Ingredients:</label>
          <input
            onChange={(event) => handleForm(event)}
            type='text'
            placeholder='ex. 2 tbsp of sugar'
            name='ingredients'
            id='ingredients'
            defaultValue={ingredients}
          />

          <label htmlFor=''>Price:</label>
          <input
            onChange={(event) => handleForm(event)}
            type='number'
            min={0.00}
            placeholder='ex. 2.59'
            name='price'
            id='price'
            defaultValue={price}
          />

          <label htmlFor=''>Weight:</label>
          <input
            onChange={(event) => handleForm(event)}
            type='number'
            min={0.00}
            placeholder='ex. 23.56'
            name='weight'
            id='weight'
            defaultValue={weight}
          />
          <button onClick={handleUpdate}>Update Product</button>
        </form>
        )}
        <button onClick={handleDelete}>Delete Cake</button>
        <button onClick={()=>setShowForm(!showForm)}>Edit Form</button>
      </div>
    </div>
 )
}
export default SingleCake
