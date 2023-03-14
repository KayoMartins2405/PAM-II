let pivo = false
if(pivo) {
    console.log("Olá pessoal");
}
else{ 
    console.log("Bye Bye Bye");
}

let nome = "Hétero top"
if (nome){
    console.log("Hétero top na área")
}
else{
    console.log("Hétero top nos deixou")
}
function teste (entrada) {
    if (entrada === "Kayo") {
        return console.log("Sua entrada foi", entrada);
    }

    if (entrada === "1") {
        return console.log("Sua entrada foi", entrada);
    }
    console.log ("Nenhum nome confere");
    }

    teste("Kayo")
    teste(1)

    let num = 1;
    let msg 
    num === 1 ? msg = "O número é 1" :msg= "O número não é 1";

    console.log(msg)

    switch (num) {
        case num === 1:
            msg = "um";
    