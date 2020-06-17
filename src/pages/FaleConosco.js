import React from "react"
import "../style/FaleConosco.css"

const FaleConosco = () =>{

  
   
   
   const [count, setCount] = React.useState(1)

   function handleClick(){
       setCount(count + 1)
   }
    




    return <div >
        <form>
            <h1 style={{fontSize:"50px"}}>Fale conosco</h1>
            <label>Nome</label>
            <input type="text" className="input nome"></input>
            <label>Titulo</label>
            <input type="text" className="input titulo"></input>
            <label>Comentário</label>
            <textarea className="input comentario">
            </textarea>
        </form>
        <ul>
            <li>Nome</li>
            <li onClick={handleClick} >Titulo:</li>
            <li>{count}</li>
            <li>2 x {count} = {count * 2}</li>
            <li>{count * 3}</li>
            <li>{count * 4}</li>
            <li>{count * 5}</li>
           
        </ul>

    </div>
};
export default FaleConosco; 