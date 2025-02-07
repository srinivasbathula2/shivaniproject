import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound()
{
    const navigate= useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
        navigate("/home")
    },5000)
    },[])
let [count,setCount]=useState(0);
useEffect(()=>{
    logics
},[count])

    return(
    <>
    <h1>Page is not found</h1>
    <img src="404-error-template-19.png"></img>
    </>
)
}
export default NotFound;