import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCake = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const sendCake = (event) => {
    event.preventDefault()
    fetch('https://nameless-anchorage-63339.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err))
  }
  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className='add-cake'>
      <form className='add-form'>
        <h1 id='add-h1'>Add Cake</h1>
        <label htmlFor=''>Your Name:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. Natalia'
          name='name'
          id='name'
        />

        <label htmlFor=''>Cake image link:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. http//:'
          name='image'
          id='image'
        />

        <label htmlFor=''>Description:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. Vanila bisquit,french...'
          name='description'
          id='description'
        />

        <label htmlFor=''>Event Date:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. mm/dd/yyyy'
          name='eventdate'
          id='eventdate'
        />

        <label htmlFor=''>Zip,State:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. 10306,New York'
          name='zipcode'
          id='zipcode'
        />
        <label htmlFor=''>Phone number:</label>
        <input
          onChange={(event) => handleForm(event)}
          type='text'
          placeholder='ex. 333-333-3333'
          name='phone'
          id='phone'
        />
        <br />
        <br />
        <button className='cake-btn' onClick={(event) => sendCake(event)}>
          Add Cake
        </button>
      </form>
    </div>
  )
}
export default AddCake
