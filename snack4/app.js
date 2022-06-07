let students = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];

function toMaiuscolo(array) {
    let newArray = array.map((value) => { return value.name.toUpperCase()})
    return newArray
}


console.log(toMaiuscolo(students));

function filtroVoti(votoMiinimo,array) {
    let newArray = array.filter((value) => { return value.grades>votoMiinimo})
    return newArray
}

console.log(filtroVoti(70,students));

function filtroVotiedID(votoMiinimo,array) {
    let newArray = array.filter((value) => { return value.grades>=votoMiinimo && value.id>120})
    return newArray
}

console.log(filtroVotiedID(70,students));