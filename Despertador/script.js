
const h = document.querySelector('input#selhora');
const m = document.getElementById('selmin');
const s = document.getElementById('selseg');
const cont = document.getElementById('contador');
const cron = document.getElementById('cronometro');

//iniciar com valores zerados
h.value = '00'
m.value = '00'
s.value = '00'
// window.onload = h.focus();

//mudando as funções do relógio

function contador(ah, am, as){
    //ah=hora
    //am=minuto
    //as=segundo
    // alert('ta indo')
    if(as.value != '00'){
        seg = Number(s.value); 
    }
    if(am.value != '00'){
        min = Number(m.value)
    }
    if(ah.value != '00'){
        hora = Number(h.value)
    }
    let time = setInterval(function diminuir(){
        let zerado = false;

        //verificação se tem 2 digítos ou não
        //segundos
        if(s.value.length<2){
            s.value = `0${seg}`;
            
        }
        //minutos
        if(m.value.length<2){
            m.value = `0${min}`
        }
        //hora
        if(h.value.length<2){
            h.value = `0${hora}`
        }
        if(seg > 0 && seg <= 60 ){
            --seg
            s.value = seg
            if(s.value.length<2){
                s.value = `0${seg}`
            }
        }
        if(seg == 59){
            --min
            m.value = min;
            if(m.value.length<2){
                m.value = `0${min}`
            }
        }
        if(seg == 0 && min > 0 && min < 60){
            seg = 60
            s.value = '00'
        }
        if(min == 59 && seg == 59) {
            --hora
            h.value = hora;
            if(h.value.length<2){
                h.value = `0${hora}`
            }
        }
        if(seg == 0 && min == 0 && hora > 0 && hora < 72){
            seg = 60
            s.value = '00'
            min = 60
            m.value = '00'
            if(h.value.length<2){
                h.value = `0${hora}`
            }
        }
        if(seg == 0 && min == 0 && hora == 0){
            s.value = '00'
            h.value = '00'
            m.value = '00' 
            zerado = true;
            // alert('Tempo esgostado')
            console.log('Temporizador zerado e encerrado'); 
        }
        //quando zerar, vai encerrar o loop de 1 segundo.
        if(zerado == true) {
            clearInterval(time);//zera a contagem decressiva
            btns[2].style.visibility = 'visible';//voltar o botao funcao
            btns[0].value = 'Iniciar';//devolver o valor inicial
            setTimeout(() => {
                alert('FIM meu parceiro.')
            }, 500); 
        }
        console.log(`hora: ${hora}, min :${min}, seg: ${seg}`);
    },1000)
    return time;
}
//se clicar em iniciar, vai chamar a função pausar
//para trocar em pausar, no botao original.
//a está recebendo o array dos botoes


function pausar(i) {
    //vai configurar o display
    //OK
    if(i == 1){//iniciou
        btns[0].value = 'Pausar';
        btns[2].style.visibility = 'hidden';
        console.log('Iniciou');
        play();
    }

    else if(i == 2){ //pausou
        let ss = s.value,
        mm = m.value,
        hh = h.value;
        console.log(`Valores pegos da contagem. hora: ${hh}, min: ${mm}, seg: ${ss}`);
        btns[0].value = 'Iniciar';//vai voltar a Valer iniciar
        console.log('Pausou');
        clearInterval()
    }

}

//aqui vai ser para zerar o tempo '00. 00. 00'
//as variaveis vao receber 00 de valor e vai iniciar a função zerados
//nao dando continuidade aos calculos e indo para o clearInterval
function zerar() {
    s.value = '00'
    m.value = '00'
    h.value = '00'
    play();
    btns[2].style.visibility = 'visible';
}


//===============================================
function cronometro(){
    // alert('cronometro marcado')
    if(seg>59||min>59||hora>23){
        alert('Tempo inválido idiota')
        s.value = '59'
        m.value = '59'
        h.value = '23'
    }
    if(s.value != '00'){
        seg = Number(s.value)
    }
    if(m.value != '00'){
        min = Number(m.value)
    }
    if(h.value != '00'){
        hora = Number(h.value)
    }

    let time = setInterval(function somar(){
        if(seg<60){
            seg++
            s.value = seg
            if(s.value.length<2){
                s.value = `0${seg}`
            }
        }
        if(seg>59){
            min++
            seg = 0
            s.value = '00'
            m.value = min
            if(m.value.length<2){
                m.value = `0${min}`
            }
        }if(min>59){
            hora++
            min = 0
            seg = 0
            m.value = '00'
            h.value = hora
            if(h.value.length<2){
                h.value = `0${hora}`
            }
        }if(hora == 72){
            alert('Voce atingiu o prazo de 3 dias!')
            
        }
        console.log(time);
    },1000);
    //z.addEventListener('click',clearInterval(time))
}

//quando clicar, vai limpar o input para digitar
//se for diferente de vazio, vai receber ele mesmo
function zera(id) {
    document.getElementById(`${id}`).value = '';
    if (document.getElementById(`${id}`).value != ''){
        document.getElementById(`${id}`).value = document.getElementById(`${id}`).value
    };
}

//verficar botao de iniciar/pausar
//testeando metodo for, e classNode
let btn = document.querySelectorAll('.btn');
console.log(btn);
let btns = []; 
for (let a of btn) {
    btns.push(a)
}
console.log('Testes');

//tirando o onclick do html
//e ao clicar, sendo iniciar vai receber o evento
//OK
let iniciar = btns[0];
iniciar.addEventListener('click', () => {
    if (iniciar.value == 'Iniciar') {
        pausar(1);//inicio
    }else if(iniciar.value == 'Pausar'){
        pausar(2);//pausa
    }
})


function play(){
    
    //convertendo para Number
    let hora = Number(h.value);
    let min = Number(m.value);
    let seg = Number(s.value);

    console.log(hora);
    console.log(min);
    console.log(seg);
    
    //verificando qual opção está marcada
    if(cont.checked == true){
        contador(hora, min, seg)
    }else if(cron.checked == true){
        cronometro()
    }    
}


