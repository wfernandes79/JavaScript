
let amigo = {
    nome: 'Willian',
    sexo: 'M',
    peso: 102,
    engordar(p=0){
      
        this.peso += p
    }
}
amigo.engordar(-1)

console.log(`${amigo.nome}, pesa ${amigo.peso} kg.`)


if(amigo.peso > 102){
    console.log('Engordou')

   } else { 
    console.log('Emagreceu')
}