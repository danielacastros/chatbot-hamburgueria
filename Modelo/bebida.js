import BebidaDAO from "../Persistencia/bebidaDAO.js";

export default class Bebida {
    #bebidaID;
    #bebidaNome;
    #bebidaDescricao;
    #bebidaImagem;

    constructor(bebidaID, bebidaNome, bebidaDescricao, bebidaImagem) {
        this.#bebidaID = bebidaID;
        this.#bebidaNome = bebidaNome;
        this.#bebidaDescricao = bebidaDescricao;
        this.#bebidaImagem = bebidaImagem;
    }

    get bebidaID() {
        return this.#bebidaID;
    }

    set bebidaID(bebidaID) {
        this.#bebidaID = bebidaID;
    }

    get bebidaNome() {
        return this.#bebidaNome;
    }

    set bebidaNome(bebidaNome) {
        this.#bebidaNome = bebidaNome;
    }


    get bebidaDescricao() {
        return this.#bebidaDescricao;
    }

    set bebidaDescricao(bebidaDescricao) {
        this.#bebidaDescricao = bebidaDescricao;
    }

    get bebidaImagem() {
        return this.#bebidaImagem;
    }

    set bebidaImagem(bebidaImagem) {
        this.#bebidaImagem = bebidaImagem;
    }

    toJSON() {
        return {
            'beb_id': this.#bebidaID,
            'beb_nome': this.#bebidaNome,
            'beb_descricao': this.#bebidaDescricao,
            'beb_imagem': this.#bebidaImagem
        }
    }

    async gravar() {
        const bebidaDAO = new BebidaDAO();
        await bebidaDAO.gravar(this);
    }

    async atualizar() {
        const bebidaDAO = new BebidaDAO();
        await bebidaDAO.atualizar(this);
    }

    async excluir() {
        const bebidaDAO = new BebidaDAO();
        await bebidaDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const bebidaDAO = new BebidaDAO();
        return await bebidaDAO.consultar(this, termoBusca);
    }
}