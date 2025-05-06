import { useState,useRef } from "react";

function SearchFilter ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
    const timeoutRef = useRef(null);
    const handleSearch= (e)=>{
        const data = e.target.value;
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            console.log("busqueda",data);
            onSearch(data);
        },500)
        setSearchTerm(data);
    }
    return(
        <section className="search-bar">
            <h2>{searchTerm}</h2>
            <input onChange={handleSearch} />
        </section>
    )
}

export default SearchFilter;