async function searchHandler(searchTerm){

    let searchArray = breakUserInput(searchTerm);
    // let searchArray = searchTerm;
    let finalResult = [];
    for (let i = 0; i < searchArray.length; i++){
        console.log(searchArray[i]);
        let tempRow = await ChemicalPull(searchArray[i]);
        if (tempRow.length > 0){
            // if statment seems to run forever
            // TODO check if we can remove this if statement and just run the for statement only
            console.log("Hello World");
            for (let j = 0; j<tempRow.length; j++){
                finalResult.push(tempRow[j]);
            }
        }
        else{
            finalResult.push(tempRow);
        }
        
    }

    // finalResult = await ChemicalPull(searchTerm);
    // console.log(finalResult);
    return finalResult;
}

async function ChemicalPull(searchTerm){
    // pull search results
    let searchURL = "http://localhost:25565/getData2/" + searchTerm;
    let result = await fetch(searchURL);
    const chemical = await result.json()
    return chemical;
}

function breakUserInput(username){
    return username.split(",");
}

// async function ChemicalsPull(searchURL){
//     const chemical_response = await fetch(searchURL);
//     const chemical = await chemical_response.json();
//     // console.log(chemical)
//     return chemical;
// }
export {searchHandler};