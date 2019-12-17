function area(largura, altura){
    const area = largura * altura
    if( area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        console.log(area)
    }
        
}
area(10, 2)
area(10)
area()
area(2,3,5,6,6)
area(15, 15)