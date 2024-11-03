
import generateName from 'sillyname';
import superheroes from 'superheroes';


const sillyName = generateName();


const name = superheroes.random();

console.log(`My name is ${sillyName} and my favorite superhero is ${name}.`);
