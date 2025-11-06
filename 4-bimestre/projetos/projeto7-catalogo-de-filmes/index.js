// CRIE UMA LÓGICA ABAIXO

const filme1 = {
  titulo : "Tropa de Elite",
  genero : "Ação",
  ano : 2007,
  avaliação : 8,
}

const filme2 = {
    titulo : "Cidade de Deus",
    genero : "Ação e Drama",
    ano : 2002,
    avaliação : 9,
}   

const filme3 = {
    titulo : "Que horas ela volta?",
    genero : "Drama social",
    ano : 2015,
    avaliação : 10,
}

const filme4 = {
    titulo : "Central do Brasil",
    genero : "Drama",
    ano : 1998,
    avaliação : 9,
}

const filme5 = {
    titulo : "Minha Mãe é uma Peça",
    genero : "Comédia",
    ano : 2013,
    avaliação : 8
}

const filme6 = {
    titulo : "O Auto da Compadecida",
    genero : "Comédia",
    ano : 2000,
    avaliação : 10,
}

const filme7 = {
    titulo : "Carandiru",
    genero : "Crime e Drama",
    ano : 2003,
    avaliação : 9
}

const filme8 = {
    titulo : "Ainda Estou Aqui",
    genero : "Drama Biografico",
    ano : 2024,
    avaliação : 9
}

const filme9 = {
    titulo : "Vitória",
    genero : "Drama",
    ano : 2025,
    avaliação : 9,
}

const filme10 = {
    titulo : "Homem com H",
    genero : "Drama",
    ano : 2024,
    avaliação : 8,
}

const catalogo = {
  filme1, filme2, filme3, filme4, filme5,
  filme6, filme7, filme8, filme9, filme10
}

console.log("=== 🎬 Catálogo de Filmes ===")
catalogo.forEach((filme, i) => {
  console.log(`${i + 1}. ${filme.titulo} - ${filme.genero}`)
})

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }