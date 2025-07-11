const arrayf = [1, 2, 3, 4, 5];

arrayf.push(6);

console.log(arrayf);
console.log(arrayf.length);

arrayf.forEach(value => {
    console.log(value);
})
//Este imprime los numeros del 1 al 6 cada uno en su propia linea

arrayf.forEach((value, index) => {
    console.log(`El valor en el indice ${index} es ${value}`)
})
//Este imprime el valor y el indice de cada elemento del array

arrayf.forEach((value, index, array) => {
    console.log(`El valor en el indice ${index} es ${value} y el array es ${array}`)
})
//Este imprime el valor, el indice y el array completo de cada elemento del array



















let marcas = ['Samsung', 'LG', 'Sony', 'Panasonic'];
let televisor = {
    marca: 'Samsung',
    modelo: 'QLED',
    precio: 1500000,
    anio: 2020
};

if (marcas.includes(televisor.marca) && televisor.precio < 2000000) {
    console.log('El televisor es barato');
} else {
    console.log('El televisor es caro');
}
