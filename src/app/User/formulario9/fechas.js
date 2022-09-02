function  funcionfecha(){
    var Fecha =  new Date(document.getElementById("fecha").value);
   console.log(Fecha.toUTCString());
    console.log(`${Fecha.getUTCDate()}/${Fecha.getUTCMonth()+1}/${Fecha.getUTCFullYear()}`);
    }