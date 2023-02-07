import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected (props) {
    let {Component , user , handleUser} = props;
    let navigate = useNavigate();
    //Each time we check
    useEffect(()=>{
        !user && navigate('/login-user');
    })

    return (
        <>
        <Component user={user} handleUser = {handleUser}/>
        </>
    )
}

export default Protected;