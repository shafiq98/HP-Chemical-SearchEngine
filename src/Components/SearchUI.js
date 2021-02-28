import React from 'react';
import {useState, useEffect} from 'react';
import {searchHandler} from '../Functions/searchHandler';
import {Results} from '../Components/Results';
import {TopResults} from '../Components/TopResults'

const SearchUI = () => {

    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [topResults, setTopResults] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        searchHandler(userInput).then(
            (result)=>{
                setSearchResults(result);
                
            }
        )
    }

    return(
        <div className='input-areas'>
            <form>
                <label>HP_Chemical</label>
                <input className='input-chem' 
                type = "text" 
                value = {userInput}
                placeholder='Input Chemical Name'
                onChange = {(event) => setUserInput(event.target.value)}></input>
                <button type = "submit" onClick = {handleChange}>Submit</button>
            </form>
            <Results resultsArray = {searchResults}></Results>
        </div>
        
    )
}

export default SearchUI;