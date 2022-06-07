const squadre = [
    {
        name: "Roma",
        punti: 0,
        falli: 0
    },
    {
        name: "Milan",
        punti: 0,
        falli: 0
    },
    {
        name: "Inter",
        punti: 0,
        falli: 0
    },
    {
        name: "Lazio",
        punti: 0,
        falli: 0
    },
    {
        name: "Sampdoria",
        punti: 0,
        falli: 0
    }
]
let newArray=[];
for (let i = 0; i < squadre.length; i++) {
    let x=squadre[i].punti=Math.floor(Math.random()*100)
    let y=squadre[i].falli=Math.floor(Math.random()*50)
    let z=squadre[i].name
    newArray.push({z,y})
}


console.log(newArray);