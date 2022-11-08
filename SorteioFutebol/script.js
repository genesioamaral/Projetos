const qtdTeam = document.getElementById('qtdTimes');
const qtdPeoples = document.getElementById('qtdpessoa');
const qtdPlayers = document.getElementById('qtdplayer');
const list = document.querySelector('.list');


function teste() {
    let team = qtdTeam.value; //times
    let peoples = qtdPeoples.value; //pessoas por time
    let players = qtdPlayers.value; //quantidade jogadores
    console.log(team, peoples, players);

    if(team == '' || peoples == '' || players == ''){
        alert('Preencha todos os campos') //se tiver tudo preenchido, ta ok
    }else{

        //vai limpar a div lista e depois vai receber os valores novamente.
        list.innerHTML = '<h4 class="flex justify-center">Cadastre os jogadores</h4>';

        for (let i = 0; players > i; i++) {

            //mostrar o display da lista
            list.style.display = 'flex';

            //criando uma nova div para um novo jogador
            let newdiv = document.createElement('div');
            newdiv.setAttribute('class','player');
            newdiv.setAttribute('id',`player${i}`);
            list.appendChild(newdiv);

            //criando o input dentro da div que foi criada
            //recebendo os mesmo valores do que ja estava no html
            let newinput = document.createElement('input');
            newinput.setAttribute('type','text');
            newinput.setAttribute('class','namePlayer flex');
            newinput.setAttribute('id', `player${i}`);
            newinput.setAttribute('placeholder',`Jogador${i}`);
            newdiv.appendChild(newinput);
        }
        list.innerHTML += '<button id="sortear" onclick="sortear()">Sortear</button>'
        alert('ta indo');
    }

}