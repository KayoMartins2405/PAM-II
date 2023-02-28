function mensagem () {
    let msg = 'Hello pipou'
    return msg
}

console.log(mensagem())

const nome= () => {
    return 'Joao'
}

console.log(nome())

function lindaMensagem (msg) {
    return console.log("A sua mensagem é: ", msg)
}

lindaMensagem("Java é bom! é incrivel")
lindaMensagem(3)
lindaMensagem("coitado do Juarez por me aguentar nas segundas")