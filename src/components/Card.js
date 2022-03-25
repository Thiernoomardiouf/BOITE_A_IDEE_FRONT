import axios from 'axios';

const Carte = (props) => { 
    let {idee} = props;
    const ApprouveHandle = ()=>{
        axios.patch(` https://box-ideas.herokuapp.com/api/ideas/status/$%7Bidee.id`, {statut:true})
        .then( () => console.log("ok"))

    }
    const RefuseHandle = ()=>{
        axios.patch(` https://box-ideas.herokuapp.com/api/ideas/status/$%7Bidee.id`,{statut:false})
        .then(()=>console.log("ok"))
    }
    
    return(
        <div className='Carte col-6'>
            <div class ="d-flex  justify-content-between mt-5  rounded-3 shadow-lg ">
                <div className="card-body ">
                    <h5 className="card-title fs-3">{idee.libelle}</h5>
                    <h6 className="card-subtitle mb-2 " >
                        {idee.statut ? "Approuvé" : "refusé"}
                    </h6>
                    <p className="card-text">{idee.description}</p>
                <div className="d-flex justify-content-around">
                    <i className="bi bi-check-circle btn text-success  " onClick={ApprouveHandle}></i>                 
                    <i className="bi bi-x-circle btn text-danger"onClick={RefuseHandle}></i>   
                </div>
                </div>
            </div> 
        </div>
        );
     };
    
     export default Carte;