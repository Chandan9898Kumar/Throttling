import React, { useState } from "react";
const URL = "https://api.postalpincode.in/pincode";
const Funct = () => {
  const [datastore, setDataStore] = useState([]);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

 
const throttle=(func)=>{
    let flag = true
    return function(){
        const args=arguments
        const context=this
        if(flag){
            func.apply(context,args)
            flag=false
            setTimeout(()=>{
                flag=true
            },1000)
        }
    }
}

const getData=(value)=>{
    fetch(`${URL}/${value}`)
      .then((response) => response.json())
      .then((data) => (
          setDataStore(data[0].PostOffice),
          setMessage(data[0].Message),
          setStatus(data[0].Status)
        )
      );
}

// Throttle applied on input Text.
const InputOnchange = throttle(getData);




//  Throttle applied on button.
const Throttle=(func)=>{
    let flag=true
    return function(){
        let args=arguments
        const context=this
        if(flag){
            func.apply(context,args)
            flag=false
            setTimeout(()=>{
                flag=true
            },1000)
        }

    }
}

const GetDataByButton=()=>{
    let value=110001
    fetch(`${URL}/${value}`)
    .then((response) => response.json())
    .then(
      (data) => (
        setDataStore(data[0].PostOffice),
        setMessage(data[0].Message),
        setStatus(data[0].Status)
      )
    );


}
const GetDetailsByButton=Throttle(GetDataByButton)
  return (
    <>
      <input
        type="text"
        placeholder="type input"
        onChange={(e) => InputOnchange(e.target.value)}
      />
      <br />
      <br />
      <button onClick={GetDetailsByButton}>Hit Button</button><br /><br />

      {!datastore?.length || datastore === undefined || datastore === null ? (
        `Status:${status}
Message: ${message}`
      ) : (
        <>
          {datastore.map((item) => (
            <li>
              Name : {item.Name}
              <br />
              Block :{item.Block}
              <br />
              BranchType : {item.BranchType}
              <br />
              <hr />
            </li>
          ))}
        </>
      )}
    </>
  );
};
export default Funct;
