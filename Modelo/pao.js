import PaoDAO from "../Persistencia/paoDAO.js";

export default class Pao {
    #paoID;
    #paoNome;
    #paoDescricao;
    #paoImagem;

    constructor(paoID, paoNome, paoDescricao, paoImagem) {
        this.#paoID = paoID;
        this.#paoNome = paoNome;
        this.#paoDescricao = paoDescricao;
        this.#paoImagem = paoImagem;
    }

    get paoID() {
        return this.#paoID;
    }

    set paoID(paoID) {
        this.#paoID = paoID;
    }

    get paoNome() {
        return this.#paoNome;
    }

    set paoNome(paoNome) {
        this.#paoNome = paoNome;
    }

    get paoDescricao() {
        return this.#paoDescricao;
    }

    set paoDescricao(paoDescricao) {
        this.#paoDescricao = paoDescricao;
    }

    get paoImagem() {
        return this.#paoImagem;
    }

    set paoImagem(paoImagem) {
        this.#paoImagem = paoImagem;
    }

    toJSON() {
        return {
            'pao_id': this.#paoID,
            'pao_nome': this.#paoNome,
            'pao_descricao': this.#paoDescricao,
            'pao_imagem': this.#paoImagem
        }
    }


    async gravar() {
        const paoDAO = new PaoDAO();
        await paoDAO.gravar(this);
    }

    async atualizar() {
        const paoDAO = new PaoDAO();
        await paoDAO.atualizar(this);
    }

    async excluir() {
        const paoDAO = new PaoDAO();
        await paoDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const paoDAO = new PaoDAO();
        return await paoDAO.consultar(this, termoBusca);
    }
}