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

//Algoritmo para determinar si un televisor es barato o caro
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


//Este es un ejemplo de como se usa Concat, es preferible usarlo en vez de push para concatenar arrays. No a;ade al array
//que ya existe, sino que crea un nuevo array con los elementos concatenados.
const xArray = [1, 2, 3, 4, 5];

const xArray2 = xArray.concat([6, 7, 8]);

console.log(xArray2);


//Este es un ejemplo de como se usa map para navegar entre arrays
const eval = xArray2.map(value => value * 3)
console.log(eval)
//Este ejemplo imprime los elementos del array xArray2 multiplicados por 3

const anothermap = xArray2.map(value => '<p>' + value + '</p>')
console.log(anothermap)
//Este ejemplo imprime los elementos del array xArray2 envueltos en etiquetas <p>

const [first, second, ...rest] = xArray2
console.log('El primer elemento del array es ' + first + ' y el segundo elemento es ' + second)  // Imprime el primer y segundo elemento del array
console.log('El resto de los elementos del array son: ' + rest)  // Imprime el resto del array como un nuevo array
