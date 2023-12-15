import AcompanhamentoDAO from "../Persistencia/acompanhamentoDAO.js";

export default class Acompanhamento {
    #acompanhamentoID;
    #acompanhamentoNome;
    #acompanhamentoDescricao;
    #acompanhamentoImagem;

    constructor(acompanhamentoID, acompanhamentoNome, acompanhamentoDescricao, acompanhamentoImagem) {
        this.#acompanhamentoID = acompanhamentoID;
        this.#acompanhamentoNome = acompanhamentoNome;
        this.#acompanhamentoDescricao = acompanhamentoDescricao;
        this.#acompanhamentoImagem = acompanhamentoImagem;
    }

    get acompanhamentoID() {
        return this.#acompanhamentoID;
    }

    set acompanhamentoID(acompanhamentoID) {
        this.#acompanhamentoID = acompanhamentoID;
    }

    get acompanhamentoNome() {
        return this.#acompanhamentoNome;
    }

    set acompanhamentoNome(acompanhamentoNome) {
        this.#acompanhamentoNome = acompanhamentoNome;
    }

    get acompanhamentoDescricao() {
        return this.#acompanhamentoDescricao;
    }

    set acompanhamentoDescricao(acompanhamentoDescricao) {
        this.#acompanhamentoDescricao = acompanhamentoDescricao;
    }

    get acompanhamentoImagem() {
        return this.#acompanhamentoImagem;
    }

    set acompanhamentoImagem(acompanhamentoImagem) {
        this.#acompanhamentoImagem = acompanhamentoImagem;
    }

    toJSON() {
        return {
            'aco_id': this.#acompanhamentoID,
            'aco_nome': this.#acompanhamentoNome,
            'aco_descricao': this.#acompanhamentoDescricao,
            'aco_imagem': this.#acompanhamentoImagem
        }
    }

    async gravar() {
        const acompanhamentoDAO = new AcompanhamentoDAO();
        await acompanhamentoDAO.gravar(this);
    }

    async atualizar() {
        const acompanhamentoDAO = new AcompanhamentoDAO();
        await acompanhamentoDAO.atualizar(this);
    }

    async excluir() {
        const acompanhamentoDAO = new AcompanhamentoDAO();
        await acompanhamentoDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const acompanhamentoDAO = new AcompanhamentoDAO();
        return await acompanhamentoDAO.consultar(this, termoBusca);
    }
}