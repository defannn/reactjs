const Navbar = (props) =>{
    return(
        <div>
            <ul>
                <h1> {props.navHeading}</h1>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">{props.navText}</a></li>
                            
            </ul>
        </div>
    )
}
export default Navbar;