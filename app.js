const baseWords = `Casa Mesa Banho Chuveiro Janela Porta Parede Teto Chão Quarto Sala Cozinha Jardim Rua Cidade Viagem Praia Montanha Rio Livro Papel Caneta Música Filme Foto Tempo Dia Noite Manhã Tarde Sol Lua Estrela Nuvem Chuva Vento Fogo Água Terra Ar Verde Azul Amarelo Branco Preto Vermelho Café Pão Leite Queijo Arroz Feijão Massa Fruta Maçã Banana Laranja Limão Uva Morango Melancia Flor Árvore Folha Pedra Areia Mar Peixe Pássaro Gato Cachorro Cavalo Criança Pessoa Amigo Família Nome Palavra Número Ideia Mágica Segredo Escolha Memória História Sonho Sombra Luz Som Silêncio Riso Olho Mão Cabeça Coração Caminho Ponte Praça Escola Trabalho Casa Chave Caixa Bolsa Relógio Telefone Computador Caderno Papelaria Mercado Loja Banco Parque Cinema Teatro Igreja Estação Aeroporto Carro Bicicleta Trem Barco Avião Nascimento Presente Futuro Passado Agora Sempre Nunca Talvez Sim Não Aqui Ali Perto Longe Dentro Fora Alto Baixo Grande Pequeno Novo Velho Rápido Lento Fácil Difícil Forte Fraco Quente Frio Doce Salgado Amargo Claro Escuro Bonito Simples Primeiro Último Outro Mesmo Diferente Certo Errado Aberto Fechado Cheio Vazio Livre Junto Sozinho Feliz Triste Calmo Nervoso Curioso Secreto Natural Especial Comum Único Raro`.split(/\s+/);
const targetCount = 10000;
const words = [];
for (let i = 0; i < targetCount; i++) {
  const index = (i * 73 + Math.floor(i / baseWords.length) * 17) % baseWords.length;
  words.push(baseWords[index]);
}
const note = document.querySelector('#note');
note.textContent = words.join('\n');

document.querySelector('#clock').textContent = new Intl.DateTimeFormat('pt-BR', {hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date());
setInterval(() => {
  document.querySelector('#clock').textContent = new Intl.DateTimeFormat('pt-BR', {hour:'2-digit', minute:'2-digit', hour12:false}).format(new Date());
}, 30000);

document.querySelector('.back').addEventListener('click', () => history.back());
document.querySelector('.done').addEventListener('click', () => note.blur());
document.querySelector('.undo').addEventListener('click', () => document.execCommand('undo'));
document.querySelector('.share-menu').addEventListener('click', async () => {
  if (navigator.share) await navigator.share({title:'Notas', text:'Nota'}).catch(() => {});
});

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
