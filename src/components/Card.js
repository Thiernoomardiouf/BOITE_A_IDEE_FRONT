// TRAVAIL DE EVA
// import axios from 'axios';

// const Card = (props) => { 
//     let {idee} = props;
//     const ApprouveHandle = ()=>{
//         axios.patch(` https://box-ideas.herokuapp.com/api/ideas/status/$%7Bidee.id`, {statut:true})
//         .then( () => console.log("ok"))

//     }
//     const RefuseHandle = ()=>{
//         axios.patch(` https://box-ideas.herokuapp.com/api/ideas/status/$%7Bidee.id`,{statut:false})
//         .then(()=>console.log("ok"))
//     }
    
//     return(
//         <div className='Carte col-6'>
//             <div class ="d-flex  justify-content-between mt-5  rounded-3 shadow-lg ">
//                 <div className="card-body ">
//                     <h5 className="card-title fs-3">{idee.libelle}</h5>
//                     <h6 className="card-subtitle mb-2 " >
//                         {idee.statut ? "Approuvé" : "refusé"}
//                     </h6>
//                     <p className="card-text">{idee.description}</p>
//                 <div className="d-flex justify-content-around">
//                     <i className="bi bi-check-circle btn text-success  " onClick={ApprouveHandle}></i>                 
//                     <i className="bi bi-x-circle btn text-danger"onClick={RefuseHandle}></i>   
//                 </div>
//                 </div>
//             </div> 
//         </div>
//         );
//      };
    
//      export default Card;
import React, {useState} from 'react';
import StyledCard from './style/carte';
import axios from "axios";


const Card = ({idee}) => {
    const [status, setStatus] = useState(idee.status);

    const handleValidClick = () => {
        axios.put(
            `https://box-ideas.herokuapp.com/api/ideas/status/${idee.id}`,
            {status: true}
        )
        .then( () => setStatus(true))
    }
    const handleUndoClick = () => {
        axios.put(
            `https://box-ideas.herokuapp.com/api/ideas/status/${idee.id}`,
            {status: false}
        )
        
        .then( () => setStatus(false))
    }
    
  return (
    <StyledCard 
        className="card card-idea m-2"
        etat={status}
        >
        <div className="card-body flex-column d-flex justify-content-between">
            <div className="card-block-titre">
                <h5 className="card-title fw-bold">{idee.title}</h5>
                <h6 className="card-subtitle mb-2 text-gris">
                    {status ? "approuvée" : "réfusée"}
                </h6>
            </div>
            <p className="card-text">{idee.description} </p>
            <div className="d-flex justify-content-between">
                <i
                    id={"approuve"}
                    className="bi bi-check-circle text-success card-link btn"
                    style={{fontSize: "2rem"}}
                    onClick={handleValidClick}
                ></i>
                <i
                    id={"desapprouve"}
                    className="bi bi-x-circle card-link btn"
                    style={{fontSize: "2rem", color: "#ce0033"}}
                    onClick={handleUndoClick}
                ></i>
            </div>
        </div>
    </StyledCard>
  )
}

export default Card
