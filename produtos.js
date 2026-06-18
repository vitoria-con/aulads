const produtos = {
    nome : "celular",
    preco : 800,
    marca : "Samsung",

}

for (let chave in produtos){
    console.log(`${chave}; ${produtos[chave]}`);
}

console.log(Object.values(produtos));
console.log(Object.keys(produtos));





