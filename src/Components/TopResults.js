import React from 'react';

const IndividualListing = (props) => {
    let {searchObject} = props;

    let Search_Term = "Asbestos", Search_Count = 48;
    if (searchObject !== null){
        // Search_Term = searchObject.Search_Term;
        // Search_Count = searchObject.Search_Count;
        console.log(searchObject);
    }

    return(
        <div>
            <h1>{Search_Term}</h1>
            <h2>Formula : {Search_Count}</h2>
        </div>
    )
    
}

const TopResults = (props) => {
    const {resultsArray} = props;
    let ToDisplay = 0;
    if (resultsArray.length > 0){
        ToDisplay = 1;
    }

    return (
        <div>
            {(ToDisplay === 1) && resultsArray.map((element)=> {
                return (
                    <IndividualListing searchResult = {element} key = {element.ID}></IndividualListing>
                )
            })}
        </div>
    )
}

export {TopResults};