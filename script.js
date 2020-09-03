function displayData(){
    let nomeDias = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
    let data = new Date()
    let diaAux = data.getUTCDay()
    let diaSemana = nomeDias[diaAux]
    let dataHoje = data.toLocaleDateString('pt-br')
    
    let dataAtual = diaSemana + ", " + dataHoje

    document.getElementById('data').innerHTML = dataAtual
}
displayData()

setInterval(displayRelogio, 1000)
function displayRelogio(){
    let tempo = new Date()
    
    horaAgora = tempo.toLocaleTimeString('pt-BR')

    document.getElementById('relogio').innerHTML = horaAgora
}
displayRelogio()