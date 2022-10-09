import React,{useState} from "react"
import { throttle } from "lodash";
import '../App.css';
import { useNavigate } from "react-router-dom";
const URL = "https://api.postalpincode.in/pincode"
const LoadThrotlle=()=>{
    const navigate=useNavigate()
    const [storeData, setStoreData] = useState([])
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)

// Throotle Applied on  Input Text.
const handleChangeWithLib=throttle((e)=>{
    fetch(`${URL}/${e.target.value}`)
            .then((response) => response.json())
            .then((data) => (
                setStoreData(data[0].PostOffice),
                setMessage(data[0].Message),
                setStatus(data[0].Status)
            ))
},1000)


// Throotle Applied on  Button. when we hit button then api will be called.
const handleChangeWithButton=throttle(()=>{
    let values=110001
    fetch(`${URL}/${values}`)
            .then((response) => response.json())
            .then((data) => (
                setStoreData(data[0].PostOffice),
                setMessage(data[0].Message),
                setStatus(data[0].Status)
            ))
},1000)





//  we used ? on storeData?.length because it helps to get undefined instead of showing an error.

return(
    <>
    <div className="App">
    <button
    onClick={()=>navigate(-1)}>Go Back</button>
    <br /><br /><br />

    <label>Type of Pin Code to get Details</label><br />
       <input
        type="text"
        className="search"
        placeholder="Enter something here..."
        onChange={(e) => handleChangeWithLib(e)}
      /><br /><br /><br />
      <button onClick={handleChangeWithButton}>Hit Button</button><br /><br /><br />
       {!storeData?.length || storeData === undefined || storeData === null ? `Status:${status}
Message: ${message}` :

                    <>
                        {storeData.map((item) => (
                            <li>
                                Name : {item.Name}<br />
                                Block :{item.Block}<br />
                                BranchType : {item.BranchType}<br />
                                <hr />
                            </li>
                        ))}
                    </>
                }



    </div>
    </>
)
}
export default LoadThrotlle;




//////////////////     Type 2nd of lodash method              ////////////////////////////////


// import  {useCallback} from "react"
// const URL="https://api.postalpincode.in/pincode"

// const LoadThrotlle=()=>{
//   const[datastore,setDataStore]=useState([])
//   const [status,setStatus]=useState(null)
//   const[message,setMessage]=useState(null)

// const getData=(values)=>{
//   console.log(values,'values >>>>>>>>>')
//   fetch(`${URL}/${values}`)
//   .then((response)=> response.json())
//   .then((data)=> (
//     setDataStore(data[0].PostOffice),
//     setMessage(data[0].Message),
//     setStatus(data[0].Status)
//   ))
  
// }



// const Debouncers= useCallback(throttle(getData,3000),[])
//                     ///   OR 
// // const Debouncers= useCallback(throttle((inputVal)=>getData(inputVal),3000),[])

// // Triggering function using throttling on input text.
// const InputOnchange=(e)=>{
// Debouncers(e.target.value)
// }


// // Triggering function using throttling on button click.
// const getMyData=()=>{
//     let values=110001
//     fetch(`${URL}/${values}`)
//     .then((response)=> response.json())
//     .then((data)=> (
//       setDataStore(data[0].PostOffice),
//       setMessage(data[0].Message),
//       setStatus(data[0].Status)
//     ))
    
//   }
// const DebouncersButton= useCallback(throttle(getMyData,3000),[])

// const GetDetailsByButton=()=>{
//     DebouncersButton()
// }

// return(
// <>
// <input
// type="text"
// placeholder='type input'
// onChange={InputOnchange}
// />
// <br /><br />
// <button 
// onClick={GetDetailsByButton}>Hit Button</button><br /><br />

// {!datastore?.length || datastore === undefined || datastore === null ? `Status:${status}
// Message: ${message}` :
//                     <>
//                         {datastore.map((item) => (
//                             <li>
//                                 Name : {item.Name}<br />
//                                 Block :{item.Block}<br />
//                                 BranchType : {item.BranchType}<br />
//                                 <hr />
//                             </li>
//                         ))}
//                     </>
//                 }
// </>
// )
// }
// export default LoadThrotlle;