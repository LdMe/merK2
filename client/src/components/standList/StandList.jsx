import { useState,useEffect,useContext } from "react";
import StandCard from "../standCard/StandCard";
import { getAllStands } from "../../utils/api/stand";
import RouteContext from "../../context/RouteContext";
import './StandList.css';


function StandList(){
    const [stands,setStands] = useState([]);
    const [error,setError] = useState(null);
    const {onRouteChange} = useContext(RouteContext);
    useEffect(()=>{
        handleLoadStands();
    },[])
    const handleLoadStands = async()=>{
        const data  = await getAllStands();
        if(data.error){
            if(data.status === 401){
                onRouteChange("login");
            }else{
                setError(data.error);
            }
        }else{
            setStands(data);
        }
    }
    return (
        <section className="stand-list">
            <h1>Stands</h1>
            {error && <p className="error"> {error}</p>}
            <section className="stand-list--stands">
            {stands.length == 0 && <p>No hay stands</p>}
            {stands.map(stand=>{
                return <StandCard stand={stand} key={stand.stand_id} /> 
            })
            }
            </section>
        </section>
    )
}

export default StandList;