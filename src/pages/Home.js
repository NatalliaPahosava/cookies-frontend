import { useState, useEffect } from 'react'
import { CakeCard } from '../components/CakeCard'

const Home = () => {
  const [cakes, setCakes] = useState([])
  useEffect(() => {
    fetch('https://nameless-anchorage-63339.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => setCakes(data))
      .catch((err) => console.error(err))
  }, [])
  const allCakes = cakes.map((eachCake) => {
    return <CakeCard key={eachCake._id} eachcake={eachCake} />
  })
  return (
    <div className='container'>
      <h1>IBaker</h1>
      <p>
        Our team of bakers chefs wants to help you save time looking for bakers,
        especially if you order a cake at the last moment. You just need to
        place your order on our website. For place the order you have to add information about the cake you want with a
        description and photo
        <span>
          <a href='https://cookie-app-frontend-np.web.app/add-cake'>Add cake</a>
        </span>
        . We will contact with you as soon as possible.
      </p>
      <div className='cakes'>{allCakes}</div>
    </div>
  )
}
export default Home
