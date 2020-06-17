import React from "react"
import "../style.css"

const Lista = () => {

    const produtos = ["Notebook", "Smartphone","Tablet"]
    const produtosMap = produtos.map((item)=>{
    return<li>{item}</li>
    })
    return (
        <div>
            <h1 className="letras">Lista</h1>
            <h3>{produtosMap}</h3>
        </div>
    )
}
export default Lista;