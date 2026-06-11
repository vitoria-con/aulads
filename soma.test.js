const somarNumero = require('./soma');
test('soma de 5 e 10 deve ser igual a 15',() => {
    expect(somarNumero(5,10)).tobe(15);
});

