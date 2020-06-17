import React from "react"

const Compras = () =>{

   
    const [color, setColor] = React.useState("red")
    const colors = ["red","blue","tomate","green"]
    const style = {
        backgroundColor: color,
        width:"200px",
        height:"200px"
    }


    


    return(
        <div>
            <div style={style}></div>
           <button >Comprar:</button>
         
        </div>
    )
};

export default Compras