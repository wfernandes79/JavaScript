var agora = new Date()
var hora = agora.getHours()
var hora1 = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${hora1}.`)
if (hora < 6){
    console.log('Bom madrugada!')
} else if (hora < 12){
    console.log('Boa dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}