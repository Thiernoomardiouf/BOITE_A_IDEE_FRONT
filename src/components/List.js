import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Fragment } from 'react/cjs/react.development';
import Card from './Card';

const List = () => {
    let tableau = []
    const [data,setData] = useState([])
    const [option,setOption] = useState({});
    const [filter,setFilter] = useState([])
    useEffect(()=>{
        axios.get('https://box-ideas.herokuapp.com/api/ideas')
        .then((response)=>setData(response.data))
    },[])
const filtre = (e)=>{
    switch (e.target.dataset['filtre']) {
        case '1':
            data.forEach(idee => {
                if (idee.status) {
                    tableau.push(idee)
                }
            });
            setFilter(tableau)
            return filter
            break;
        case '2':
            data.forEach(idee => {
                if (idee.status==false) {
                    tableau.push(idee)
                }
            });
            setFilter(tableau)
            return filter
            break;
        default:
            setFilter(data)
            return filter
            break;
    }
}
// const toggle_status = () =>{
//     setOption({desapprouve:!option.desapprouve, approuve:option.desapprouve} )
// }
    return (
        <div className='row'>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center my-5">
                <h3>La liste des propostions</h3>
                <div>
                    <button type="button" className="filtre-tous btn me-2 btn-outline-secondary btn filter" data-filtre='0' onClick={filtre}>Tous</button>
                    <button type="button" className="filtre-refuse btn btn-outline-danger btn me-2 filter" data-filtre='2' onClick={filtre}>Refusée(s)</button>
                    <button type="button" className="filtre-accepte btn btn-outline-success btn filter" data-filtre='1' onClick={filtre}>Acceptée(s)</button>
                </div>
                </div>
            </div>
            <div id='results' className='row'>
                {
                    (filter.length!=0)?
                    filter.map((idee)=><Card idee={idee} key={idee.id}/>):
                    data.map((idee)=><Card idee={idee} key={idee.id}/>)
                }
                {/* BAYE DAME et PAPI */}
                {/* {data.map((idee)=>{
                    if(option.approuve){
                       return idee.status &&  <Card idee={idee} key={idee.id} setOption={setOption}/>
                    }else if(option.desapprouve){
                        return !idee.status && <Card idee={idee} key={idee.id} setOption={setOption}/>
                    }else{
                        return <Card idee={idee} key={idee.id} setOption={setOption}/>
                    }
                })} */}
            </div>
        </div>
    );
};

export default List;