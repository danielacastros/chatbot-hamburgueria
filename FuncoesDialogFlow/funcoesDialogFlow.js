import Acompanhamento from "../Modelo/acompanhamento.js";
import Bebida from "../Modelo/bebida.js";
import Carne from "../Modelo/carne.js";
import Pao from "../Modelo/pao.js";
import Ponto from "../Modelo/ponto.js";
import Queijo from "../Modelo/queijo.js"
import Salada from "../Modelo/salada.js";


export function criarMessengerCard() {
    return {
        type: "info",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        actionLink: ""
    }
}

export function criarCustomCard() {
    return {
        card: {
            title: "",
            subtitle: "",
            imageUri: "",
            button: [{
                text: 'botão',
                postback: ""
            }]
        }
    }
}


export async function obterCardQueijos(tipocard = 'custom') {
    const queijos = new Queijo();

    const listaQueijos2 = await queijos.consultar();
    const listaCards = [];
    for (const queijo of listaQueijos2) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = queijo.queijoNome;
            cartao.card.subtitle = queijo.queijoDescricao;
            cartao.card.imageUri = queijo.queijoImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = queijo.queijoNome;
            cartao.subtitle = queijo.queijoDescricao;
            cartao.image.src.rawUrl = queijo.queijoImagem;
            console.log(cartao)
        }
        listaCards.push(cartao);
    }
    return listaCards;
}


export async function obterCardPaes(tipocard = 'custom') {
    const pesquisa = new Pao();

    const listaPaes = await pesquisa.consultar();
    const listaCards = [];
    for (const pao of listaPaes) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = pao.paoNome;
            cartao.card.subtitle = pao.paoDescricao;
            cartao.card.imageUri = pao.paoImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = pao.paoNome;
            cartao.subtitle = pao.paoDescricao;
            cartao.image.src.rawUrl = pao.paoImagem;
            console.log(cartao.image.src.rawUrl)
        }
        listaCards.push(cartao);
    }
    return listaCards;
}




export async function obterCardHamburguer(tipocard = 'custom') {
    const pesquisa = new Carne();

    const listaHamburgueres = await pesquisa.consultar();
    const listaCards = [];
    for (const carne of listaHamburgueres) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = carne.carneNome;
            cartao.card.subtitle = carne.carneDescricao;
            cartao.card.imageUri = carne.carneImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = carne.carneNome;
            cartao.subtitle = carne.carneDescricao;
            cartao.image.src.rawUrl = carne.carneImagem;
        }
        listaCards.push(cartao);
    }
    return listaCards;
}


export async function obterCardAcompanhamento(tipocard = 'custom') {
    const pesquisa = new Acompanhamento();

    const listaAcompanhamento = await pesquisa.consultar();
    const listaCards = [];
    for (const acompanhamento of listaAcompanhamento) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = acompanhamento.acompanhamentoNome;
            cartao.card.subtitle = acompanhamento.acompanhamentoDescricao;
            cartao.card.imageUri = acompanhamento.acompanhamentoImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = acompanhamento.acompanhamentoNome;
            cartao.subtitle = acompanhamento.acompanhamentoDescricao;
            cartao.image.src.rawUrl = acompanhamento.acompanhamentoImagem;
        }
        listaCards.push(cartao);
    }
    return listaCards;
}

export async function obterCardSalada(tipocard = 'custom') {
    const pesquisa = new Salada();

    const listaSaladas = await pesquisa.consultar();
    const listaCards = [];
    for (const salada of listaSaladas) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = salada.saladaNome;
            cartao.card.subtitle = salada.saladaDescricao;
            cartao.card.imageUri = salada.saladaImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = salada.saladaNome;
            cartao.subtitle = salada.saladaDescricao;
            cartao.image.src.rawUrl = salada.saladaImagem;
        }
        listaCards.push(cartao);
    }
    return listaCards;
}

export async function obterCardPonto(tipocard = 'custom') {
    const pesquisa = new Ponto();

    const listaPonto = await pesquisa.consultar();
    const listaCards = [];
    for (const ponto of listaPonto) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = ponto.pontoNome;
            cartao.card.subtitle = ponto.pontoDescricao;
            cartao.card.imageUri = ponto.pontoImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = ponto.pontoNome;
            cartao.subtitle = ponto.pontoDescricao;
            cartao.image.src.rawUrl = ponto.pontoImagem;
        }
        listaCards.push(cartao);
    }
    return listaCards;
}

export async function obterCardBebidas(tipocard = 'custom') {
    const pesquisa = new Bebida();

    const listaBebida = await pesquisa.consultar();
    const listaCards = [];
    for (const bebida of listaBebida) {
        let cartao = {};
        if (tipocard == 'custom') {
            cartao = criarCustomCard();
            cartao.card.title = bebida.bebidaNome;
            cartao.card.subtitle = bebida.bebidaDescricao;
            cartao.card.imageUri = bebida.bebidaImagem;
        } else {
            cartao = criarMessengerCard();
            cartao.title = bebida.bebidaNome;
            cartao.subtitle = bebida.bebidaDescricao;
            cartao.image.src.rawUrl = bebida.bebidaImagem;
        }
        listaCards.push(cartao);
    }
    return listaCards;
}