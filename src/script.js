const equipamentoLeve = [
    {
        itens:[
            "Adaga*",
            "Adaga*",
            ""
        ],
        dano:"2/2",
        defesa:"0" 
    },
    {
        itens:[
            "Adaga*",
            "Escudo",
            ""
        ],
        dano:"2",
        defesa:"1" 
    },
    {
        itens:[
            "Arco Simples",
            "",
            ""
        ],
        dano:"2",
        defesa:"0" 
    },
    {
        itens:[
            "Arco Composto",
            "",
            ""
        ],
        dano:"3",
        defesa:"0" 
    },
    {
        itens:[
            "Adaga*",
            "Adaga*",
            "2 x Adaga*"
        ],
        dano:"2/2/2/2",
        defesa:"0" 
    },
    {
        itens:[
            "Besta",
            "Elmo",
            ""
        ],
        dano:"3",
        defesa:"1" 
    }
]
const equipamentoPesado = [
    {
        itens:[
            "Espada",
            "Escudo",
            ""
        ],
        dano:"3",
        defesa:"1" 
    },
    {
        itens:[
            "Machado",
            "Elmo",
            ""
        ],
        dano:"4",
        defesa:"1" 
    },
    {
        itens:[
            "*Machadinha",
            "*Machadinha",
            ""
        ],
        dano:"3/3",
        defesa:"0" 
    },
    {
        itens:[
            "Espadona",
            "",
            ""
        ],
        dano:"5",
        defesa:"0" 
    },
    {
        itens:[
            "Espada",
            "Espada",
            "Armadura"
        ],
        dano:"3/3",
        defesa:"1" 
    },
    {
        itens:[
            "*Adaga",
            "Espada",
            "Armadura"
        ],
        dano:"2/3",
        defesa:"1" 
    }
   
]
const equipamentoExplosivo = [
    {
        itens:[
            "Pistola",
            "Elmo",
            ""
        ],
        dano:"4",
        defesa:"1" 
    },
    {
        itens:[
            "Pistola",
            "Pistola",
            ""
        ],
        dano:"4/4",
        defesa:"" 
    },
    {
        itens:[
            "Galinha Explosiva",
            "Galinha Explosiva",
            "Galinha Explosiva"
        ],
        dano:"4/4/4",
        defesa:"" 
    },
    {
        itens:[
            "Barril de Polvora",
            "",
            ""
        ],
        dano:"5",
        defesa:"" 
    },
    {
        itens:[
            "Pistola",
            "Galinha Explosiva",
            "Galinha Explosiva"
        ],
        dano:"4/4/4",
        defesa:"" 
    },
    {
        itens:[
            "Canhão (2 Turnos) ",
            "",
            ""
        ],
        dano:"8",
        defesa:"" 
    }
]
const nomeAleatorioA = [
    "SP",
    "Cr",
    "Bu",
    "Ut",
    "An",
    "Om"
]
const nomeAleatorioB = [
    "or",
    "ut",
    "ar",
    "an",
    "ot",
    "ec"
]

const caracteristica = [
    'Insano',
    'Fedorento',
    'Cicatrizes',
    'Gordo',
    'Fala Errado',
    'Anomalia',
]

var cor = [
    {
        nome:'Verde Claro',
        atributo:[
            2,2,1,1
        ]
    },{
        nome:'Verde',
        atributo:[
            2,1,1,2
        ]
    },{
        nome:'Verde Escuro',
        atributo:[
            2,1,2,1
        ]
    },{
        nome:'Amarelo',
        atributo:[
            1,1,2,2
        ]
    },{
        nome:'Vermelho',
        atributo:[
            1,2,2,1
        ]
    },{
        nome:'Azul',
        atributo:[
            1,2,1,2
        ]
    }
];
var ocupacao = [
    {
        nome:'Mercenário',
        atributo:[
            1,0,1,0
        ],
        skils:{
            novel1:{
                titulo:'Mestre de Armas',
                efeito: 'Você sempre rola +1 em todos os ataques que você fizer lutando com, sua arma favorita (Escolha uma).'
            },
            novel2:{
                titulo:'Ataque Brutal',
                efeito: 'Uma vez ao dia você pode fazer um ataque brutal, que causa o dobro de dano na vítima.'
            },
            novel3:{
                titulo:'Ataque Fatal',
                efeito: 'Uma vez ao dia você pode fazer um ataque fatal. Se acertar, a vitima deverá vencer um teste de Sorte (Dificuldade 5) ou morrerá imediatamente.'
            }
        }
    },{
        nome:'Caçador',
        atributo:[
            1,0,0,1
        ],
        skils:{
            novel1:{
                titulo:'Rastrear',
                efeito: 'Com um teste bem sucedido de Conhecimento (dificuldade 3) você pode rastrear qualquer criatura'
            },
            novel2:{
                titulo:'Mira Certeira',
                efeito: 'Você ignora a proteção dos seus oponentes.'
            },
            novel3:{
                titulo:'Tiro Fatal',
                efeito: 'Uma vez ao dia você pode fazer um ataque à distância fatal. Se acertar, a vitima deverá vencer um teste de Sorte (Dificuldade 5) ou morrerá imediatamente'
            }
        }
    },{
        nome:'Gatuno',
        atributo:[
            0,1,1,0
        ],
        skils:{
            novel1:{
                titulo:'Roubar',
                efeito: 'Você pode roubar sem ser visto se vencer um teste resistido de Habilidade contra a vítima'
            },
            novel2:{
                titulo:'Armar Armadilhas',
                efeito: 'Você pode fazer uma armadilha em qualquer lugar se tiver alguns materiais. A pessoa terá que passar em um teste de Sorte (dificuldade 5) para não cair na sua armadilha.'
            },
            novel3:{
                titulo:'Ataque Furtivo',
                efeito: 'Se você não foi visto, você pode fazer um ataque furtivo. Se acertar, a vitima deverá fazer um teste de Sorte (Dificuldade 5). Se ela falhar ela morrerá.' 
            }
        }
            
    },{
        nome:'Lider',
        atributo:[
            1,1,0,0
        ],
        equipamento:equipamentoPesado[rolaDado()],
        skils:{
            novel1:{
                titulo:'Grito de Gerra',
                efeito: 'Uma vez ao dia você pode dar um grito que permitirá que todos seus aliados rolem 1 dado a mais para se esquivar até o final da batalha'
            },
            novel2:{
                titulo:'Ataque Brutal',
                efeito: 'Uma vez ao dia você pode fazer um ataque brutal, que causa o dobro de dano na vítima.'
            },
            novel3:{
                titulo:'Ataque Fatal',
                efeito: 'Uma vez ao dia você pode fazer um ataque fatal. Se acertar, a vitima deverá fazer um teste de Sorte (Dificuldade 5). Se ela falhar ela morrerá' 
            }
        }
            
    },{
        nome:'Piromaníaco',
        atributo:[
            0,0,1,1
        ],
        skils:{
            novel1:{
                titulo:'Resistencia',
                efeito: 'Você pode fazer um teste de Sorte (dificuldade 5) quando receber dano de fogo ou explosão de fogo. Se vencer, você não recebe dano'
            },
            novel2:{
                titulo:'Suicídio Explosivo',
                efeito: 'Usando sua arma, você pode se explodir e matar TODOS os que estiverem na área da explosão.'
            },
            novel3:{
                titulo:'Imunidade',
                efeito: 'Você nunca recebe dano com fogo ou explosão' 
            }
        }
    },{
        nome:'Xamã',
        atributo:[
            0,1,0,1
        ],
        skils:{
            novel1:{
                titulo:'Raio de Energia',
                efeito: 'Você pode gastar pontos de magia para fazer ataques a distância. Cada ponto gasto causará um ponto de dano (pode gastar mais para fazer ataque com mais dano)'
            },
            novel2:{
                titulo:'Cura',
                efeito: 'Você pode gastar seus pontos de magia para curar seus aliados. Cada ponto de magia recupera um ponto de vitalidade.'
            },
            novel3:{
                titulo:'Petrificar',
                efeito: 'Gastando 6 pontos de magia você pode paralisar qualquer criatura.'
            }
        }
    }
]

function retornaAnonalia(cont){
    const anomalias = [
        "Manchas rosas",
        "Manchas rosas",
        "Manchas rosas",
        "Orelha no sovaco",
        "Braço extra atrofiado",
        "(1d6) Olhos",
        "Olhos Gigantes",
        "Mãos Gigantes",
        "Duas Cabeças",
        "Rerrolar",
        "Rerrolar",
        "Rerrolar"
    ]
    let anomalia = anomalias[(rolaDado()+rolaDado())];

    if (anomalia == "Rerrolar") {
        cont = cont+1;
        if (cont == 6) {
            return anomalias[0];
        } 
        retornaAnonalia(cont)
    } if (anomalia == "(1d6) Olhos") {
        return (rolaDado()+1)+" Olhos";
    }
    return anomalia;
}
function rolaDado() {
    min = Math.ceil(0);
    max = Math.floor(5);
    return Math.floor(Math.random() * (max - min)) + min;
}
function geraGoblin(){
    let mCor = cor[rolaDado()]; // Randomiza a cor do Goblin
    let mOcupacao = ocupacao[rolaDado()]; // Randomiza a ocupação
    let mCaracteristica = caracteristica[rolaDado()]; // Randomiza caracterista
    let equipamento = 0;

    switch (mOcupacao.nome) { // Randomiza item a partir da ocupação
        case 'Mercenário':
            equipamento = equipamentoPesado[rolaDado()];
            break;
        case 'Caçador':
            equipamento = equipamentoLeve[rolaDado()];
            break;
        case 'Gatuno':
            equipamento = equipamentoLeve[rolaDado()];
            break;
        case 'Lider':
            equipamento = equipamentoPesado[rolaDado()];
            break;
        case 'Piromaníaco':
            equipamento = equipamentoExplosivo[rolaDado()];
            break;
        default:
            equipamento = {
                itens:[
                    "Cajado",
                    "8 Pontos de Magia",
                    ""
                ],
                dano:"1",
                defesa:"0" 
            }
    }

    if (mCaracteristica == "Anomalia") { // Verifica se possui alguma anomalia
        mCaracteristica = mCaracteristica+" "+retornaAnonalia(1);
    }

    var goblin = {
        nome:nomeAleatorioA[rolaDado()]+nomeAleatorioB[rolaDado()],
        cor:mCor.nome,
        ocupacao : mOcupacao.nome,
        caracteristica : mCaracteristica,
        equipamento : equipamento,
        skils: mOcupacao.skils,
        nivel:1,
        atributos : {
            comabte:(mCor.atributo[0]+mOcupacao.atributo[0]),
            conhecimento:(mCor.atributo[1])+mOcupacao.atributo[1],
            habilidade:(mCor.atributo[2]+mOcupacao.atributo[2]),
            sorte:(mCor.atributo[3]+mOcupacao.atributo[3])
        }
    } 

    return goblin;
}
function deletaFicha(handle){
    handle.parentElement.parentElement.remove();
}
document.getElementById('geraFicha').addEventListener('click',function(){
    let goblin = geraGoblin();
    let elemento = "<div class='ficha'>"
        +"<div class='linha reverse'>"
            +"<button onClick='deletaFicha(this)' class='remover'>X</button>"
        +"</div>"
        +"<div class='coluna'>"
            +"<p class='large'><b>Nome: </b>"+goblin.nome+"</p>"
            +"<p class='large'><b>Aparência: </b>"+goblin.caracteristica+"</p>"
        +"</div>"
        +"<div class='linha'>"  
            +"<p class='large'><b>Ocupação: </b>"+goblin.ocupacao+"</p>"
            +"<label class='mediun linha'>"
                +"<b>Nivel:</b>"
                +"<input type='text' name='nivel' max='4' min='1' value='"+goblin.nivel+"'>"
            +"</label>"
        +"</div>"
        +"<div class='linha'>"
            +"<div class='coluna'>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Combate:</p>"
                    +"<p class='smal'>"+goblin.atributos.comabte+"</p>"
                +"</div>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Conhecimento:</p>"
                    +"<p class='smal'>"+goblin.atributos.conhecimento+"</p>"
                +"</div>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Habilidade:</p>"
                    +"<p class='smal'>"+goblin.atributos.habilidade+"</p>"
                +"</div>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Sorte:</p>"
                    +"<p class='smal'>"+goblin.atributos.sorte+"</p>"
                +"</div>"
            +"</div>"
            +"<div class='coluna'>"
                +"<p class='large negrito center'>Equipamento</p>"
                +"<p class='large equipe'>"+goblin.equipamento.itens[0]+"</p>"
                +"<p class='large equipe'>"+goblin.equipamento.itens[1]+"</p>"
                +"<p class='large equipe'>"+goblin.equipamento.itens[2]+"</p>"
            +"</div>"
        +"</div>"
        +"<div class='linha dual_column'>"
            +"<div class='coluna metade'>"
                +"<p class='large negrito'>Vitalidade</p>"
                +"<div class='linha'>"
                    +"<input type='checkbox' name='vida' checked>"
                    +"<input type='checkbox' name='vida' checked>"
                    +"<input type='checkbox' name='vida' checked>"
                    +"<input type='checkbox' name='vida' >"
                +"</div>"
            +"</div>"
            +"<div class='coluna metade'>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Dano</p>"
                    +"<p class='mediun'>"+goblin.equipamento.dano+"</p>"
                +"</div>"
                +"<div class='linha'>"
                    +"<p class='large negrito'>Proteção</p>"
                    +"<p class='mediun'>"+goblin.equipamento.defesa+"</p>"
                +"</div>"
            +"</div>"
        +"</div>"
        +"<div class='coluna'>"
            +"<div class='coluna'>"
                +"<p class='large negrito'>Nivel 1 : "+goblin.skils.novel1.titulo+"</p>"
                +"<p class='large'>"+goblin.skils.novel1.efeito+"</p>"
            +"</div>"
            +"<div class='coluna'>"
                +"<p class='large negrito'>Nivel 2 :"+goblin.skils.novel2.titulo+"</p>"
                +"<p class='large'>"+goblin.skils.novel2.efeito+"</p>"
            +"</div>"
            +"<div class='coluna'>"
                +"<p class='large negrito'>Nivel 3 :"+goblin.skils.novel3.titulo+"</p>"
                +"<p class='large'>"+goblin.skils.novel3.efeito+"</p>"
            +"</div>"
        +"</div>"
    +"</div>";
    document.getElementById('fichaArea').innerHTML += elemento;
})

var goblin = new Object();