const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];
let min=parseInt(prompt("Inserisci l'indice minimo da cui estrarre"))
let max=parseInt(prompt("Inserisci l'indice massimo da cui estrarre"))


function intervalForEach(min, max, array) {
let newArray=[] ;
if(min<0 || min>=max || max>array.length){
    alert("Non puoi estrarre con questi valori di  min e max da questo array")
return
}   
array.forEach((element,index) => {
    if(index>=min && index<=max){
        newArray.push(element)
    }
});
return newArray
}

console.log(`L'array ottenuto con foreach è `+ intervalForEach(min,max,myArray));

function intervalFilter(min, max, array) {
    
    if(min<0 || min>=max || max>array.length){
        alert("Non puoi estrarre con questi valori di  min e max da questo array")
    return
    }   
    let newarray=array.filter((element,index) => {
        if(index>=min && index<=max){
            return true
        }
    });
    return newarray
    }

    console.log(`L'array ottenuto con foreach è `+ intervalFilter(min,max,myArray));