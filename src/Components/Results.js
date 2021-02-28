import React from 'react';

const IndividualListing = (props) => {
    let {chemical} = props;

    let CHEMICAL_NAME, CHEMICAL_FORMULA, ID;
    if (chemical !== null){
        CHEMICAL_NAME = chemical.CHEMICAL_NAME;
        CHEMICAL_FORMULA = chemical.CHEMICAL_FORMULA;
        ID = chemical.ID;
    }

    return(
        <div>
            <h1>{CHEMICAL_NAME}</h1>
            <h2>Formula : {CHEMICAL_FORMULA}</h2>
            <p>{ID}</p>
        </div>
    )
    
}

const Results = (props) => {
    const {resultsArray} = props;
    let ToDisplay = 0;
    if (resultsArray.length > 0){
        ToDisplay = 1;
    }

    return (
        <div>
            {(ToDisplay === 1) && resultsArray.map((element)=> {
                return (
                    <IndividualListing chemical = {element} key = {element.ID}></IndividualListing>
                )
            })}

            <p>This is from the Results Component</p>
        </div>
    )
}

export {Results};