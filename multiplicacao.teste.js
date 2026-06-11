const multiplicar = require ("./multiplicacao")
test ("deve multiplicar dois numeros inteiros positivo",()=>{
    expect(multiplicar(3,2)).toBe(6)
});

test ("deve falhar, pois esta multiplicando uma string por e um valor numerico",()=>{
espect (multiplicar -5).tothrow()});

test ("deve multiplicar 2num.decimais"),()=>{
    expect (multiplicar ( 2.5,3.0)).toBe(7.75);}

test('deve somar dois números corretamente',()=>{
        expect(sum(2, 3)).toBe(5);}

