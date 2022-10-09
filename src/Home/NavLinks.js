import React  from "react";
import { NavLink } from "react-router-dom"
const Home=()=>{

return(
    <>
    <label>Throttling is used to call a function after every miliseconds or a particular interval of time
    only the first click is executed immediately</label>
    
    <br /><br /><br /><br  />
    <NavLink to='/throttleLodash'>Throttle With Lodash</NavLink>

    </>
)
}
export default Home;
