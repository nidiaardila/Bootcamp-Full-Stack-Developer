

//funcion de sumar dos numeros
export const sumarDosNumeros = (a, b) => {
    
    if(typeof a !== 'number' || typeof b !== 'number') throw new Error('Ambos elementos deben ser un número')

    return a + b
}


//funcion para saber si es palindromo
export const esPalindromo =(texto) => {
    if(typeof texto !== 'string'){
        throw new Error ('El valor debe ser un string');
    }

    const limpio = texto.toLowerCase().replace(/[\W_]/g, '');
    return limpio === limpio.split('').reverse().join('');
}