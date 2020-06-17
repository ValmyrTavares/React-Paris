import React from "react"
import "../style/Home.css"

const Home = () =>{
    
    
    return(
        <div>
            
            <h1>Bem vindo a Paris</h1>
           <img src="https://abrilviagemeturismo.files.wordpress.com/2016/11/thinkstockphotos-4549879531.jpeg?quality=70&strip=info&w=680&h=453&crop=1" Alt="Paris"></img>
           <p>Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. 
               Sua paisagem urbana do século XIX é cortada por
               avenidas largas e pelo rio Sena. A cidade é conhecida
                por monumentos como a Torre Eiffel e a Catedral de 
                Notre-Dame, uma construção gótica do século XII, sendo
                 famosa também pela cultura dos cafés e por lojas de 
                 estilistas famosos na Rue du Faubourg Saint-Honoré.</p>
        </div>
    )
}



export default Home; 





// const Home = () =>{
//     const nav = (
//         <div>
//            <p>
//                teste agora está funcionando
//            </p>
//         </div>
//     );
//     const idade = 29
//     const pessoa = {
//         nome:"Antonio",
//         idade: 12,
//         nacionalidade:"Frances"
//     }


     
//     return (
//     <div>
//         <h1>Homes</h1>
//         {idade>30 ? "O cara está caindo aos pedaços": "Vc é jovem e tem tempo"}
//         <ul>
//             <li>{pessoa.nome}</li>
//             <li>{pessoa.idade}</li>
//             <li>{pessoa.nacionalidade}</li>
//         </ul>
//         {nav}
        
//     </div>
//     )
//};