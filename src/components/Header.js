import logo from '../image/1.svg';
const Header=()=>{
    return(
        <ul>
           <a href="/"><img src={logo} className="App-logo" alt="logo"></img></a> 
            <li><a href="/">Home</a></li>
            <li><a href="/about-me">About Us</a></li>
            <li><a href="/add-cake">Add Cakes</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    )
}
export default Header