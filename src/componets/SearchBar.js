import './SearchBar.css'
import { useState } from "react";


function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFromSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(term);
    };
    
    const handleChange = (event) => {
        setTerm(event.target.value);
        //grabs the value from the keypress 
    ;}

    return(
        <div className='search-bar'>
            <form onSubmit={handleFromSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange}/> 
            </form>
        </div>
    )
}

export default SearchBar;

//form allows for a submit event, but needs event.prevent default allow for one event handler for enter and button click 