import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SingleCake = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { name, image, phone, eventdate, description, zipcode } = location.state
  const handleDelete = (event) => {
    event.preventDefault()
    fetch(`https://nameless-anchorage-63339.herokuapp.com/?name=${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err))
  }
  const handleUpdate = (event) => {
    event.preventDefault()
    fetch(`https://nameless-anchorage-63339.herokuapp.com/?name=${name}`, {
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

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <div className='single-cake'>
        <h1>{name}</h1>
        <img src={image} alt='' />
        <p>
          <b>Description:</b>
          {description}
        </p>
        <p>
          <b>Event Date:</b>
          {eventdate}
        </p>
        <p>
          <b>Zip,State:</b>
          {zipcode}
        </p>
        <p>
          <b>Phone number:</b>
          {phone}
        </p>
        <div className='update-form'>
          {showForm && (
            <form className='add-form'>
              <h3>Edit Cake</h3>
              <label htmlFor=''>Your Name:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='Natalia'
                name='name'
                id='name'
                defaultValue={name}
              />

              <label htmlFor=''>Cake image link:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='ex. http//:'
                name='image'
                id='image'
                defaultValue={image}
              />

              <label htmlFor=''>Description:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='Vanila cake,french cream...'
                name='description'
                id='description'
                defaultValue={description}
              />

              <label htmlFor=''>Event Date:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='mm/dd/yyyy'
                name='eventdate'
                id='eventdate'
                defaultValue={eventdate}
              />
              <label htmlFor=''>Zip,State:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='10306, New York'
                name='zipcode'
                id='zipcode'
                defaultValue={zipcode}
              />
              <label htmlFor=''>Phone number:</label>
              <input
                onChange={(event) => handleForm(event)}
                type='text'
                placeholder='10306, New York'
                name='zipcode'
                id='zipcode'
                defaultValue={phone}
              />
              <button className='btn-sgl' onClick={handleUpdate}>
                Update Cake
              </button>
            </form>
          )}
          <button className='btn-sgl' onClick={handleDelete}>
            Delete Cake
          </button>
          <button className='btn-sgl' onClick={() => setShowForm(!showForm)}>
            Edit Form
          </button>
        </div>
      </div>
    </div>
  )
}
export default SingleCake
