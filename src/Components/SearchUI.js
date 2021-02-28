import React from 'react';
import {useState} from 'react';
import {searchHandler} from '../Functions/searchHandler';
import {Results} from '../Components/Results';

const SearchUI = () => {

    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {

        searchHandler(userInput).then(
            (result)=>{
                setSearchResults(result);
                
            }
        )
    }

    return(
        <div>
            <form>
                <label>HP_Chemical</label>
                <input type = "text" value = {userInput} onChange = {(event) => setUserInput(event.target.value)}></input>
                <button type = "submit" onClick = {handleChange}>Submit</button>
            </form>
            <p>This is from the SearchUI Component</p>
            <Results resultsArray = {searchResults}></Results>
        </div>
        
    )
}

export default SearchUI;