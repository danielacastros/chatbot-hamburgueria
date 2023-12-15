import SaladaDAO from "../Persistencia/saladaDAO.js";

export default class Salada {
    #saladaID;
    #saladaNome;
    #saladaDescricao;
    #saladaImagem;

    constructor(saladaID, saladaNome, saladaDescricao, saladaImagem) {
        this.#saladaID = saladaID;
        this.#saladaNome = saladaNome;
        this.#saladaDescricao = saladaDescricao;
        this.#saladaImagem = saladaImagem;
    }

    get saladaID() {
        return this.#saladaID;
    }

    set saladaID(saladaID) {
        this.#saladaID = saladaID;
    }

    get saladaNome() {
        return this.#saladaNome;
    }

    set saladaNome(saladaNome) {
        this.#saladaNome = saladaNome;
    }

    get saladaDescricao() {
        return this.#saladaDescricao;
    }

    set saladaDescricao(saladaDescricao) {
        this.#saladaDescricao = saladaDescricao;
    }

    get saladaImagem() {
        return this.#saladaImagem;
    }

    set saladaImagem(saladaImagem) {
        this.#saladaImagem = saladaImagem;
    }

    toJSON() {
        return {
            'sal_id': this.#saladaID,
            'sal_nome': this.#saladaNome,
            'sal_descricao': this.#saladaDescricao,
            'sal_imagem': this.#saladaImagem
        }
    }

    async gravar() {
        const saladaDAO = new SaladaDAO();
        await saladaDAO.gravar(this);
    }

    async atualizar() {
        const saladaDAO = new SaladaDAO();
        await saladaDAO.atualizar(this);
    }

    async excluir() {
        const saladaDAO = new SaladaDAO();
        await saladaDAO.excluir(this);
    }

    async consultar() {
        const saladaDAO = new SaladaDAO();
        return await saladaDAO.consultar(this);
    }
}