const objects=[
    {name:"Scott",
    peso:7},
    {name:"Pinarello",
    peso:6.9},
    {name:"DogmaF12",
    peso:7.2},
    {name:"Triban",
    peso:7.7},
    {name:"Triban",
    peso:7.9},
    {name:"Triban",
    peso:6.7}

]
const html=document.querySelector(".text-mine")
let x=objects[0]
let y=0
for(let i=1; i<objects.length;i++){
    if(objects[i].peso<x.peso){
        let {name,peso} =objects[i]
        y=i
        console.log({name,peso});
    }
}


html.innerHTML=`La bici più leggera è : ${objects[y].name} e pesa ${objects[y].peso} kg`

