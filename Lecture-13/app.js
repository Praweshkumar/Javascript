const URl = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);

const getFacts = async()=>{
    console.log("getting data...")
    let promise  =await fetch(URl);
    console.log(response);
    
}