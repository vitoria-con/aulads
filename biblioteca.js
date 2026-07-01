const biblioteca = {
    livros: [],

    adicionarLivros(titulo, autor, preco, categoria) {
        const livro = {
            titulo: titulo,
            autor: autor,
            preco: preco,
            categoria: categoria
        };
        
        this.livros.push(livro);
    },

    mostrarLivros() {
        
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];
            console.log("Título:", l.titulo, " Autor:", l.autor, "Preço: R$", l.preco, "Categoria:", l.categoria);
        }
    }
};

biblioteca.adicionarLivros("O senhor dos aneis", "J.R.R. Tolkien", 59.90, "Fantasia");
biblioteca.adicionarLivros("O Hobbit", "J.R.R. Tolkien", 39.90, "Fantasia");

biblioteca.mostrarLivros();


































