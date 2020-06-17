import React from "react"
import "../style.css"

const Atributos = () =>{
    const abre = 8;
    const agora = new Date().getHours();

    function handleClick(event){
        console.log(event)
    }



    return(
        <div>
            <h1 style={{color: "blue", fontSize:"3rem", fontFamily:"monospace"}} >Empresa</h1>
            <p className={agora > abre ? "aberto": ""}>Funcionamento</p>
            <button onClick={handleClick}> aqui</button>

 
        </div>
    )
}
export default Atributos;