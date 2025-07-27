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


const eval = xArray2.map(value => value * 3)
console.log(eval)
//Este ejemplo imprime los elementos del array xArray2 multiplicados por 3

const anothermap = xArray2.map(value => '<p>' + value + '</p>')
console.log(anothermap)
//Este ejemplo imprime los elementos del array xArray2 envueltos en etiquetas <p>

const [first, second, ...rest] = xArray2
console.log('El primer elemento del array es ' + first + ' y el segundo elemento es ' + second)  // Imprime el primer y segundo elemento del array
console.log('El resto de los elementos del array son: ' + rest)  // Imprime el resto del array como un nuevo array

//Este es un ejemplo de como se usa filter para filtrar elementos de un array
const filterArray = xArray2.filter(value => value > 5)  
console.log('Los elementos despues del value 5 son: ' + filterArray)  // Imprime un nuevo array con los elementos mayores a 5

//Este es un ejemplo de como se usa find para encontrar un elemento en un array
const findArray = xArray2.find(value => value > 5)
console.log('El primer elemento despues del value 5 es ' + findArray)  // Imprime el primer elemento que cumple la condicion, en este caso el primer elemento mayor a 5

//Este es un ejemplo de como se usa reduce para reducir un array a un solo valor
const reduceArray = xArray2.reduce((accumulator, value) => accumulator + value, 0)
console.log('La suma de todos los elementos del array es ' + reduceArray)  // Imprime la suma de todos los elementos del array


///Trabajando con objetos
//Este es un ejemplo de como se crea un objeto y se accede a sus propiedades
const objeto1 = {
    name: 'Juan',
    age: 30,
    education: {
        degree: 'Ingenieroa',
        university: 'UNAM'
    }
}

console.log('El titulo de ' + objeto1.name + ' es ' + objeto1.education.degree);  // Imprime el nombre del objeto
console.log(objeto1.education.university);  // Imprime la universidad del objeto

const objeto2 = {
    name: {
        first: 'Juan',
        last: 'Perez'
    },
    grades: [9, 10, 11],
    department: 'UNAM'
}
const age = 25

//Practica de conocimientos en objetos
////////////////////////////////////////
const elementos = [1, 2, 3, 4, 5];
const elementos2 = [6, 7, 8, 9, 10];

elementos.forEach((elemento, indice) => {
    console.log(`El elemento en el indice ${indice} es ${elemento}`)
})

const nuevoArray = elementos.concat(elementos2);
console.log(nuevoArray);

console.log(`El nuevo array tiene ${nuevoArray.length} elementos`)

const mappingElements = nuevoArray.map(value => `<p>${value}</p>`)
console.log(mappingElements);

const mappingElements2 = nuevoArray.map(value => value * 2)
console.log(mappingElements2);

const [firstElement, secondElement, ...restElements] = nuevoArray;
console.log(`El primer elemento es ${firstElement} y el segundo elemento es ${secondElement}`);
console.log(`El resto de los elementos son: ${restElements}`);

const objectHuman = {
    name: 'Wilson',
    age: 28,
    gender: 'Male',
    hobbies: ['Reading', 'Gaming', 'Traveling', 'Programming'],
    location: 'New York',
    studies: {
        degree: ['Computer Science', 'Mathematics'],
        university: 'MIT',
        year: 2020
    }
}

console.log(objectHuman.name, objectHuman.hobbies[3], objectHuman.studies.degree[1])

const adding = 'Status';
objectHuman.status = 'Married';
console.log(objectHuman);



////////////////////////////////////////////////////
//Funciones y su uso

//Forma numero 1 de hacer la suma
const sum = (a, b) => {
    return a + b;
}
const data = sum(5, 10);
console.log(data);

//Forma numero 2 de hacer la suma
function suma (d, c) {
    return d + c;
}

const result = suma(15, 20);
console.log(result);
//Dos formas de hacer la misma suma, una con arrow function y otra con function declaration

//Esta es una funcion para sacar el cuadrado del mismo numero
const square = x =>{
    console.log(x)
    return 'La raiz cuadrada de ' + x + ' es igual a ' + x * x;
}
const squaredValue = square(4);
console.log(squaredValue);


const elementos3 = [6, 7, 8, 9, 10];

const squaredArray = elementos3.map(p => p * p);
console.log(squaredArray);



//usando this en un objeto

const objeto3 = {
    name: 'Wilson',
    age: 26,
    university: 'MIT',
    greet: function() {
        console.log('The name is ' + this.name)
    }
}

objeto3.greet()  // Imprime el nombre del objeto usando this

objeto3.anadirEdad = function() {
    this.age += 1;
    console.log('The new age is ' + this.age);
}

objeto3.anadirEdad()  // Imprime la nueva edad del objeto usando this


const count = 8
const character = "#"

for (let i = character; i.length <= count; i += character) {
    console.log(i)
}


