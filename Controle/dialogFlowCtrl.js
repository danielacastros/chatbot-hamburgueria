import { obterCardAcompanhamento, obterCardBebidas, obterCardHamburguer, obterCardPaes, obterCardPonto, obterCardQueijos, obterCardSalada } from "../FuncoesDialogFlow/funcoesDialogFlow.js";
import Acompanhamento from "../Modelo/acompanhamento.js";
import Bebida from "../Modelo/bebida.js";
import Carne from "../Modelo/carne.js";
import Pao from "../Modelo/pao.js";
import Pedido from "../Modelo/pedido.js";
import Ponto from "../Modelo/ponto.js";
import Queijo from "../Modelo/queijo.js";
import Salada from "../Modelo/salada.js";

export default class DialogFlowCtrl {
    async processarIntencoes(req, res) {

        if (req.method === "POST") {
            const intencao = req.body.queryResult.intent.displayName;
            const origem = req.body?.originalDetectIntentRequest?.source;
            if (intencao === "Pedir - sim") {
                if (origem) {
                    obterCardPaes('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Beleza! Vamos montar o seu hamburguer!\n",
                                    "Primeiro me diz qual o tipo de pão que você gostaria:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar os pães \n",
                                        "Não foi possível consultar os pães."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardPaes('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha o pão",
                                    "text": [
                                        "Beleza! Vamos montar o seu hamburguer!\n",
                                        "Primeiro me diz qual o tipo de pão que você gostaria:\n"
                                    ]
                                }]]
                            }
                        });
                        console.log('resp:', resposta)
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de pães",
                                    "text": [
                                        "Não foi possível recuperar a lista de pães",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }

            if (intencao === "EscolhaPao") {
                if (origem) {
                    obterCardQueijos('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Lega! Esse pão é muito bom!\n",
                                    "Agora me fala qual queijo você gostaria de acrescentar:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar os queijos \n",
                                        "Não foi possível consultar os queijos."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardQueijos('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha o queijo",
                                    "text": [
                                        "Ótima escolha! Esse queijo deixa tudo mais especial!\n",
                                        "Agora vamos definir o tipo de carne:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de hamburgueres",
                                    "text": [
                                        "Não foi possível recuperar a lista de hamburgueres",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }


            if (intencao === "EscolhaQueijo") {
                if (origem) {
                    obterCardHamburguer('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Ótima escolha! Esse queijo deixa tudo mais especial!\n",
                                    "Agora vamos definir o tipo de carne:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar os hamburgueres \n",
                                        "Não foi possível consultar os hamburgueres."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardHamburguer('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha o queijo",
                                    "text": [
                                        "Beleza! Vamos montar o seu hamburguer!\n",
                                        "Primeiro me diz qual o tipo de pão que você gostaria:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de hamburgueres",
                                    "text": [
                                        "Não foi possível recuperar a lista de hamburgueres",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }


            if (intencao === "EscolhaAcompanhamento") {
                if (origem) {
                    obterCardSalada('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Esse acompanhamento é o toque final!\n",
                                    "Agora escolha a salada:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar as saladas \n",
                                        "Não foi possível consultar as saladas."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardSalada('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha a salada",
                                    "text": [
                                        "Esse acompanhamento é o toque final!\n",
                                        "Agora escolha a salada:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de acompanhamento",
                                    "text": [
                                        "Não foi possível recuperar a lista de acompanhamento",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }


            if (intencao === "EscolhaSalada") {
                if (origem) {
                    obterCardPonto('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Irado!\n",
                                    "Agora, pra finalizar a montagem do hamburguer me informe o ponto da carne:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar o ponto \n",
                                        "Não foi possível consultar o ponto."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardPonto('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha o ponto",
                                    "text": [
                                        "Irado!\n",
                                        "Agora, pra finalizar a montagem do hamburguer me informe o ponto da carne:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de ponto",
                                    "text": [
                                        "Não foi possível recuperar a lista de ponto",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }


            if (intencao === "EscolhaHamburguer") {
                if (origem) {
                    obterCardAcompanhamento('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Esse lanche está ficando incrível!\n",
                                    "Agora me diz qual vai ser o acompanhamento:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar os acompanhamento \n",
                                        "Não foi possível consultar os acompanhamento."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardAcompanhamento('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha o acompanhamento",
                                    "text": [
                                        "Esse lanche está ficando incrível!\n",
                                        "Agora me diz qual vai ser o acompanhamento:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de acompanhamento",
                                    "text": [
                                        "Não foi possível recuperar a lista de acompanhamento",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }

            if (intencao === "EscolhaPonto") {
                if (origem) {
                    obterCardBebidas('custom').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "text": {
                                "text": [
                                    "Perfeito!\n",
                                    "Agora me fala qual vai ser a bebida:\n"
                                ]
                            }
                        });
                        resposta.fulfillmentMessages.push(...listaCards);
                        res.json(resposta);

                    }).catch((erro) => {
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        "Erro ao recuperar as bebidas \n",
                                        "Não foi possível consultar as bebidas."
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    })
                } else {
                    obterCardBebidas('messenger').then((listaCards) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Escolha a bebida",
                                    "text": [
                                        "Perfeito!\n",
                                        "Agora me fala qual vai ser a bebida:\n"
                                    ]
                                }]]
                            }
                        });
                        resposta.fulfillmentMessages[0].payload.richContent[0].push(...listaCards);
                        res.json(resposta);
                    }).catch((error) => {
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Erro ao recuperar a lista de bebidas",
                                    "text": [
                                        "Não foi possível recuperar a lista de bebidas",
                                        "Desculpe pelo transtorno."
                                    ]
                                }]]
                            }
                        });
                    })
                }
            }

            if (intencao === 'EscolhaBebida') {
                const combo = req.body.queryResult.outputContexts[0].parameters;
                let itensPedidos = [];
                console.log(combo)

                let pao = req.body.queryResult.outputContexts[0].parameters.pao;
                let paoPesquisa = new Pao();
                let paoEncontrado = await paoPesquisa.consultar(pao);

                let queijo = req.body.queryResult.outputContexts[0].parameters.queijo;
                let queijoPesquisa = new Queijo();
                let queijoEncontrado = await queijoPesquisa.consultar(queijo);

                let hamburguer = req.body.queryResult.outputContexts[0].parameters.Hamburguer;
                let hamburguerPesquisa = new Carne();
                let hamburguerEncontrado = await hamburguerPesquisa.consultar(hamburguer);

                let acompanhamento = req.body.queryResult.outputContexts[0].parameters.Acomp;
                let acompanhamentoPesquisa = new Acompanhamento();
                let acompanhamentoEncontrado = await acompanhamentoPesquisa.consultar(acompanhamento);

                let salada = req.body.queryResult.outputContexts[0].parameters.Verduras;
                let saladaPesquisa = new Salada();
                let saladaEncontrada = await saladaPesquisa.consultar(salada);

                let ponto = req.body.queryResult.outputContexts[0].parameters.PontoCarne;
                let pontoPesquisa = new Ponto();
                let pontoEncontrado = await pontoPesquisa.consultar(ponto);

                let bebida = req.body.queryResult.outputContexts[0].parameters.bebida;
                let bebidaPesquisa = new Bebida();
                let bebidaEncontrada = await bebidaPesquisa.consultar(bebida);

                itensPedidos.push({
                    "pao": {
                        "pao_id": paoEncontrado[0].paoID,
                        "pao_nome": paoEncontrado[0].paoNome
                    },
                    "queijo": {
                        "que_id": queijoEncontrado[0].queijoID,
                        "que_nome": queijoEncontrado[0].queijoNome,
                    },
                    "hamburguer": {
                        "ham_id": hamburguerEncontrado[0].carneID,
                        "ham_nome": hamburguerEncontrado[0].carneNome,
                    },
                    "acompanhamento": {
                        "aco_id": acompanhamentoEncontrado[0].acompanhamentoID,
                        "aco_nome": acompanhamentoEncontrado[0].acompanhamentoNome,
                    },
                    "salada": {
                        "sal_id": saladaEncontrada[0].saladaID,
                        "sal_nome": saladaEncontrada[0].saladaNome,
                    },
                    "ponto": {
                        "pon_id": pontoEncontrado[0].pontoID,
                        "pon_nome": pontoEncontrado[0].pontoNome,
                    },
                    "bebida": {
                        "beb_id": bebidaEncontrada[0].bebidaID,
                        "beb_nome": bebidaEncontrada[0].bebidaNome
                    }
                })

                console.log(itensPedidos)

                let dataDeHoje = new Date().toLocaleDateString();

                const pedido = new Pedido(0, dataDeHoje, itensPedidos);
                pedido.gravar().then(() => {
                    if (origem) {// ambientes custom
                        let resposta = {
                            "fulfillmentMessages": [{
                                "text": {
                                    "text": [
                                        `Pedido nº ${pedido.id} foi registrado com sucesso!\n`,
                                        "O seu pedido foi: \n.",
                                        `Pão: ${itensPedidos[0].pao.pao_nome}\n`,
                                        `${itensPedidos[0].hamburguer.ham_nome}\n"`,
                                        `Queijo: ${itensPedidos[0].queijo.que_nome}\n`,
                                        `Acompanhamento: ${itensPedidos[0].acompanhamento.aco_nome}\n`,
                                        `Salada: ${itensPedidos[0].salada.sal_nome}\n`,
                                        `Ponto: ${itensPedidos[0].ponto.pon_nome}\n`,
                                        `Bebida: ${itensPedidos[0].bebida.beb_nome}\n`
                                    ]
                                }
                            }]
                        }
                        res.json(resposta)
                    } else {//MESSENGER
                        let resposta = {
                            "fulfillmentMessages": []
                        }
                        resposta.fulfillmentMessages.push({
                            "payload": {
                                "richContent": [[{
                                    "type": "description",
                                    "title": "Pedido registrado",
                                    "text": [
                                        `Pedido nº ${pedido.id} foi registrado com sucesso\n`,
                                        "O seu pedido foi: \n",
                                        `Pão: ${itensPedidos[0].pao.pao_nome}\n`,
                                        `${itensPedidos[0].hamburguer.ham_nome}\n`,
                                        `Queijo: ${itensPedidos[0].queijo.que_nome}\n`,
                                        `Acompanhamento: ${itensPedidos[0].acompanhamento.aco_nome}\n`,
                                        `Salada: ${itensPedidos[0].salada.sal_nome}\n`,
                                        `Ponto: ${itensPedidos[0].ponto.pon_nome}\n`,
                                        `Bebida: ${itensPedidos[0].bebida.beb_nome}\n`
                                    ]
                                }]]
                            }
                        });
                        res.json(resposta)
                    }
                }
                );
            }

        }
    }
}