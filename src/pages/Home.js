import { useState, useEffect } from 'react'
import { CakeCard } from '../components/CakeCard'
import logo from '../image/66295.jpg';

const Home = () => {
  const [cakes, setCakes] = useState([])
  useEffect(() => {
       // fetch('http://localhost:4000')
        fetch('https://nameless-anchorage-63339.herokuapp.com/')
        .then((res) => res.json())
        .then((data) => setCakes(data))
        .catch((err) => console.error(err))
  }, [])
  const allCakes = cakes.map(eachCake => 
   {return (<CakeCard key={eachCake._id} eachcake={eachCake}/>)
})
  return (
    <div className='container'>
      <img src={logo} className="App-logo" alt="logo"></img>
      <h1>iBaker</h1>
      <div className='products'>{allCakes}</div>
    </div>
  )
}
export default Home

