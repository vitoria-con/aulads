const biblioteca = { 
    livros: [],

    adicionarLivros(titulo, autor, preco, categoria) {
        const livro = {
            titulo: titulo,
            autor: autor,
            preco: preco,
            categoria: categoria,
            disponivel: true // Nova propriedade para controlar o aluguel
        };
        
        this.livros.push(livro);
    },

    mostrarLivros() {
        if (this.livros.length === 0) {
            console.log("A biblioteca está vazia.");
            return;
        }
        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];
            const status = l.disponivel ? "Disponível" : "Alugado";
            console.log(`Título: ${l.titulo} | Autor: ${l.autor} | Preço: R$ ${l.preco} | Categoria: ${l.categoria} | Status: ${status}`);
        }
    },

    remover(titulo) {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];
            // Corrigido de L.nome para L.titulo
            if (L.titulo.toLowerCase() === titulo.toLowerCase()) {
                this.livros.splice(i, 1);
                console.log("O Livro " + titulo + " foi removido com sucesso!");
                return; // Sai da função após remover
            }
        }
        // Mensagem movida para fora do loop para não repetir a cada livro não encontrado
        console.log("Livro não encontrado para remoção!");
    },

    // Criando a função alugar que estava faltando
    alugar(titulo) {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];
            if (L.titulo.toLowerCase() === titulo.toLowerCase()) {
                if (L.disponivel) {
                    L.disponivel = false;
                    console.log(`Sucesso: O livro "${L.titulo}" foi alugado!`);
                } else {
                    console.log(`Aviso: O livro "${L.titulo}" já está alugado.`);
                }
                return;
            }
        }
        console.log(`Erro: O livro "${titulo}" não foi encontrado.`);
    },

    // Criando a função devolver que estava faltando
    devolver(titulo) {
        for (let i = 0; i < this.livros.length; i++) {
            const L = this.livros[i];
            if (L.titulo.toLowerCase() === titulo.toLowerCase()) {
                if (!L.disponivel) {
                    L.disponivel = true;
                    console.log(`Sucesso: O livro "${L.titulo}" foi devolvido!`);
                } else {
                    console.log(`Aviso: O livro "${L.titulo}" já estava na biblioteca.`);
                }
                return;
            }
        }
        console.log(`Erro: O livro "${titulo}" não foi encontrado.`);
    }
};

// --- Testando o sistema ---

// Cadastro correto de livros (conforme os parâmetros definidos na função: titulo, autor, preco, categoria)
biblioteca.adicionarLivros("Cinderela", "Irmãos Grimm", 15.00, "Infantil");
biblioteca.adicionarLivros("Peter Pan", "J. M. Barrie", 20.00, "Infantil");
biblioteca.adicionarLivros("O Senhor dos Anéis", "J.R.R. Tolkien", 59.90, "Fantasia");
biblioteca.adicionarLivros("O Hobbit", "J.R.R. Tolkien", 39.90, "Fantasia");

console.log("--- Lista de Livros Inicial ---");
biblioteca.mostrarLivros();

console.log("\n--- Testando Aluguel ---");
biblioteca.alugar("Cinderela"); // Sucesso
biblioteca.alugar("Cinderela"); // Já alugado
biblioteca.alugar("Harry Potter"); // Não encontrado

console.log("\n--- Testando Devolução ---");
biblioteca.devolver("Cinderela"); // Sucesso

console.log("\n--- Testando Remoção ---");
biblioteca.remover("Cinderela");

console.log("\n--- Lista de Livros Final ---");
biblioteca.mostrarLivros();

















        


 




































