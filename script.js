function displayData(){
    let nomeDias = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
    let data = new Date()
    let dia = data.getDay() - 1
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let diaAux = data.getUTCDay()
    let diaSemana = nomeDias[diaAux]

    dia = dia < 10 ? "0" + dia : dia
    mes = mes < 10 ? "0" + mes : mes

    let dataAtual = diaSemana + ", " + dia + "/" + mes + "/" + ano

    document.getElementById('data').innerHTML = dataAtual
}
displayData()

setInterval(displayRelogio, 1000)
function displayRelogio(){
    let tempo = new Date()
    let hora = tempo.getHours()
    let min = tempo.getMinutes()
    let seg = tempo.getSeconds()

    hora = hora < 10 ? "0" + hora : hora
    min = min < 10 ? "0" + min : min
    seg = seg < 10 ? "0" + seg : seg

    let horaAgora = hora + ":" + min + ":" + seg

    document.getElementById('relogio').innerHTML = horaAgora
}
displayRelogio()
