import PontoDAO from "../Persistencia/pontoDAO.js";

export default class Ponto {
    #pontoID;
    #pontoNome;
    #pontoDescricao;
    #pontoImagem;

    constructor(pontoID, pontoNome, pontoDescricao, pontoImagem) {
        this.#pontoID = pontoID;
        this.#pontoNome = pontoNome;
        this.#pontoDescricao = pontoDescricao;
        this.#pontoImagem = pontoImagem;
    }

    get pontoID() {
        return this.#pontoID;
    }

    set pontoID(pontoID) {
        this.#pontoID = pontoID;
    }

    get pontoNome() {
        return this.#pontoNome;
    }

    set pontoNome(pontoNome) {
        this.#pontoNome = pontoNome;
    }

    get pontoDescricao() {
        return this.#pontoDescricao;
    }

    set pontoDescricao(pontoDescricao) {
        this.#pontoDescricao = pontoDescricao;
    }

    get pontoImagem() {
        return this.#pontoImagem;
    }

    set pontoImagem(pontoImagem) {
        this.#pontoImagem = pontoImagem;
    }

    toJSON() {
        return {
            'pon_id': this.#pontoID,
            'pon_nome': this.#pontoNome,
            'pon_descricao': this.#pontoDescricao,
            'pon_imagem': this.#pontoImagem
        }
    }

    async gravar() {
        const pontoDAO = new PontoDAO();
        await pontoDAO.gravar(this);
    }

    async atualizar() {
        const pontoDAO = new PontoDAO();
        await pontoDAO.atualizar(this);
    }

    async excluir() {
        const pontoDAO = new PontoDAO();
        await pontoDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const pontoDAO = new PontoDAO();
        return await pontoDAO.consultar(this, termoBusca);
    }
}