const multiplicar = require ("./multiplicacao")
test ("deve multiplicar dois numeros inteiros positivo",()=>{
    expect(multiplicar(3,2)).toBe(6)
});
test ("deve falhar, pois esta multiplicando uma string por e um valor numerico",()=>{
espect (multiplicar -5).tothrow()});
