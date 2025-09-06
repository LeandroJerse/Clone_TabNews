const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
    aleatorio1 = Math.random() * 10;
    aleatorio2 = Math.random() * 10;
    console.log(aleatorio1, aleatorio2);
    console.log(calculadora.somar(aleatorio1, aleatorio2));
    expect(calculadora.somar(aleatorio1, aleatorio2)).toBe(aleatorio1 + aleatorio2);
})
test("somar 'banana' + 2 deveria retornar erro", () => {


    expect(calculadora.somar('banana', 2)).toBe("Erro");
})