import { strict as assert } from 'assert';

import { sumarDosNumeros } from '../function.js';
import { esPalindromo } from '../function.js';


describe('Prueba funcion que suma dos números', ()=> {
    it('Deberia retornar  5 cuando sumanos 1 y 4', ()=> {
        assert.strictEqual(sumarDosNumeros(1, 4), 5);
    });

    it('Debería retornar -1 cuando sumanos 1 y -2', () => {
        assert.strictEqual(sumarDosNumeros(1, -2), -1);
    });

    it('Debería arrojar un error al sumar 2 y a', () => {
        assert.throws(() => sumarDosNumeros(2, 'a'), Error);
    });

    it('Debería arrojar un error al sumar 2 númerico y "9" como string', () => {
        assert.throws(() => sumarDosNumeros(2, "9"), Error);
    });
})

describe('Prueba función que verifica si un texto es palíndromo', () => {
    it('Debería retornar true para "reconocer"', () => {
        assert.strictEqual(esPalindromo('reconocer'), true);
    });

    it('Debería retornar true para "Anita lava la tina"', () => {
        assert.strictEqual(esPalindromo('Anita lava la tina'), true);
    });

    it('Debería retornar false para "corazon"', () => {
        assert.strictEqual(esPalindromo('corazon'), false);
    });

    it('Debería arrojar un error si el argumento no es string', () => {
        assert.throws(() => esPalindromo(12345), Error);
    });
});
