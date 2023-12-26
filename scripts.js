
var listaJogadores = [
  
  { imagem: 'https://i.pinimg.com/236x/bb/60/27/bb6027e7b8f4191e11f583dd40ab2756.jpg', nome: 'Ragnar',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/63/32/d1/6332d171b3ac59cb6818142a91b61f5c.jpg', nome: 'Lagertha',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/d6/62/10/d66210a6af0f05b57d3e6ffa69987b6d.jpg', nome: 'Bjorn',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/15/97/15/159715eaefb8245bdf6ca311fc224202.jpg', nome: 'Ivar',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/18/1b/97/181b97c89c621ca14724827872a4c21e.jpg', nome: 'Floki',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/cc/ed/d3/ccedd33731e4fcd0551d4bf515ad0433.jpg', nome: 'Ubbe',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/77/7e/da/777eda7903a353fa19ac5a17bd6a4ecc.jpg', nome: 'Rollo',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/4b/0e/80/4b0e801312092b0d9c2d6a630d4dbe7b.jpg', nome: 'Torvi',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/236x/c6/83/72/c6837263690352071ca0dd2df4196c5e.jpg', nome: 'Helga',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  { imagem: 'https://i.pinimg.com/736x/eb/1e/09/eb1e09300e1bcc83100a646ae2f91e90.jpg', nome: 'Athelstan',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
];

//pega o id da tabela
var elementoTabela = document.getElementById('tabelaJogadores')

exibirNaTela()                 
function exibirNaTela(){
  //ordena a lista
  listaJogadores.sort(function (x, y){
    return y.escolhas - x.escolhas; //ordem decrescente
  });  
  
  var elemento = " "
  
  //mostra os jogadores em cada posicao 
  for(var i = 0; i<listaJogadores.length ; i++){
  var jogador = listaJogadores[i]
  console.log(jogador)
    
  //mostra na tela os jogadores
  elemento += `
       <tr>
          <td><img src="${listaJogadores[i].imagem}" alt="${listaJogadores[i].nome}"></td>
          <td>${listaJogadores[i].nome}</td>
          <td>${listaJogadores[i].vitoria}</td>
          <td>${listaJogadores[i].derrota}</td>
          <td>${listaJogadores[i].quantidadeEscolha}</td>
          <td>${listaJogadores[i].escolhas}%</td> 
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
          <td><button onClick="selecionarAgente(${i})">Selecionar</button></td>
          <td><button onClick="excluirJogador(${i})">X</button></td>
        </tr>
  `
  }
  
  elementoTabela.innerHTML = elemento
}


function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitoria++
  jogador.pontos = jogador.pontos + 3
  exibirNaTela()
}

function adicionarDerrota(i) {
  var jogador = listaJogadores[i];
  jogador.derrota++
  exibirNaTela()
}

function selecionarAgente(i) {
  var jogador = listaJogadores[i];
  jogador.quantidadeEscolha++;

  // Calcular a porcentagem
  var totalEscolhas = listaJogadores.reduce((total, jogador) => total + jogador.quantidadeEscolha, 0);
  var porcentagem = (jogador.quantidadeEscolha / totalEscolhas) * 100;
  
  jogador.escolhas = porcentagem.toFixed(2)

  // Atualizar a tabela
  exibirNaTela();
}

function excluirJogador(i){
  var jogador = listaJogadores[i];
  listaJogadores.splice(i, 1);
  exibirNaTela()
}

function adicionarAgente(){  
  var agente = document.getElementById('adicionarAgente').value
  var imagem = document.getElementById('adicionarImagem').value
  
  const obj = {imagem: imagem, nome: agente,  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 } // Corrigido para usar 'escolhas'
  listaJogadores.push(obj);
  
  document.getElementById('adicionarAgente').value = ''
  document.getElementById('adicionarImagem').value = ''
  exibirNaTela()
}  
