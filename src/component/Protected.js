import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected (props) {
    let {Component , user , handleCart,removeCart} = props;
    let navigate = useNavigate();
    //Each time we check
    useEffect(()=>{
        !user && navigate('/login-user');
    })

    return (
        <>
        <Component user={user} handleCart = {handleCart} removeCart ={removeCart}/>
        </>
    )
}

export default Protected;