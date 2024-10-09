const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'pac.jpeg' },
    { nome: 'Mario Bros', imagem: 'Mario2.jpg' },
    { nome: 'Pitfall', imagem: 'pitfall.jpeg' },
    { nome: 'Enduro', imagem: 'enduro.jpeg' },
    { nome: 'Donkey Kong', imagem: 'donkey.jpeg' },
    { nome: 'Galaxy', imagem: 'galaxy.jpeg' },
    { nome: 'Tennis', imagem: 'tennis.jpeg' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});