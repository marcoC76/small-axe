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
/* console.log("objeto oroginal", obj); */
var Agrupos = [];
var Aequipos = [];
var grupos = [];
for (let index = 0; index < obj.length; index++) {
    if (obj[index].GRUPO != "") {
        grupos.push(obj[index].GRUPO);
    }
}

let soloHayGrupos = [...new Set(grupos)]
/* console.log("Grupos que existen", soloHayGrupos); */

for (let index = 0; index < soloHayGrupos.length; index++) {
    /*   console.log(soloHayGrupos[index]); */
    var newArray = obj.filter(function (el) {
        return (el.GRUPO === soloHayGrupos[index]);
    });
    /* console.log("filtrando el array por grupos", newArray); */

    Agrupos.push(newArray);

}

console.log("Array dividido por grupos", Agrupos);
/* console.log(Agrupos[0].length); */

var equipos = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
};
let soloHayEquipos= {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
};
for (let h = 0; h < Agrupos.length; h++) {
   /*  console.log(Agrupos[h]); */
    var grup = Agrupos[h];
    for (let j = 0; j < Agrupos[h].length; j++) {

        /*  console.log("Entra 2"); */
        equipos[h].push(Agrupos[h][j].EQUIPO);
        
    }
    soloHayEquipos[h] = [...new Set(equipos[h])];
    /* console.log(soloHayEquipos[h]); */
}
/* console.log(equipos); */
console.log(soloHayEquipos);
console.log("Equipos", soloHayEquipos[0]);
