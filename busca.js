var obj;
var salida = '';
var valor;

var appi = "https://script.googleusercontent.com/macros/echo?user_content_key=F50kUuixg_1_YNRBwi-XJB9Irsas9MzbLt4HIRZSSQW6mLPfwDXhVX1mvQ0tFXI9qN3e22ahv33gsDNlgmxmCNfjzRWAR42Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH7FvHuoCA3aY6oYh_uPeR7OGIv6mE7OArfLpHEi2SkZG7auUhcX8GvYge8pF1VBKFasVhBWVkFc&lib=MlfAK7sYzDUKhAPiLWJ3BQCiYTb7JmIRw";

ft(appi);

function ft(appi) {

    fetch(appi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var objInter = data;

            /* console.log(obj); */
            localStorage.setItem("obj", JSON.stringify(objInter));
        })
        .catch(function (err) {
            console.error(err);
        });

}

obj = JSON.parse(localStorage.getItem("obj"));
console.log("objeto oroginal",obj);
var Agrupos = [];
var Aequipos = [];
var grupos = [];
for (let index = 0; index < obj.length; index++) {
    if (obj[index].GRUPO != "") {
        grupos.push(obj[index].GRUPO);
    }
}

let soloHayGrupos = [...new Set(grupos)]
console.log("Grupos que existen",soloHayGrupos);

for (let index = 0; index < soloHayGrupos.length; index++) {
    console.log(soloHayGrupos[index]);
    var newArray = obj.filter(function (el) {
        return (el.GRUPO === soloHayGrupos[index]);
    });
    console.log("filtrando el array por grupos",newArray);

    Agrupos.push(newArray);

}

console.log("Array dividido por grupos",Agrupos);
/* console.log(Agrupos[0].length); */

var equipos = [];
for (let g = 0; g < soloHayGrupos.length; g++) {
    
    for (let index = 0; index < Agrupos[g].length; index++) {
        console.log(soloHayGrupos[g],Agrupos[g][index].EQUIPO);


        /* if(Agrupos[g][index].EQUIPO != "" ){
            equipos.push(Agrupos[g][index].EQUIPO);
        } */
   }
    /* console.log(equipos); */
   
 /*   let soloHay =[...new Set(equipos)] 
   console.log(soloHay);  */
}




/* var newArray = obj.filter(function (el) {
    return (el.GRUPO === "A");
});

var equipos = [];
for (let index = 0; index < newArray.length; index++) {
    if(newArray[index].EQUIPO != ""){
        equipos.push(newArray[index].EQUIPO);
    }
}
console.log(equipos);

let soloHay =[...new Set(equipos)] 
console.log(soloHay); */