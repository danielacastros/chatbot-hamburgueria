import QueijoDAO from "../Persistencia/queijoDAO.js";


export default class Queijo {
    #queijoID;
    #queijoNome;
    #queijoDescricao;
    #queijoImagem;

    constructor(queijoID, queijoNome, queijoDescricao, queijoImagem) {
        this.#queijoID = queijoID;
        this.#queijoNome = queijoNome
        this.#queijoDescricao = queijoDescricao;
        this.#queijoImagem = queijoImagem;
    }

    get queijoID() {
        return this.#queijoID;
    }

    set queijoID(novoQueijoID) {
        this.#queijoID = novoQueijoID;
    }

    get queijoNome() {
        return this.#queijoNome;
    }

    set queijoNome(queijoNome) {
        this.#queijoNome = queijoNome;
    }


    get queijoDescricao() {
        return this.#queijoDescricao;
    }

    set queijoDescricao(queijoDescricao) {
        this.#queijoDescricao = queijoDescricao;
    }

    get queijoImagem() {
        return this.#queijoImagem;
    }

    set queijoImagem(queijoImagem) {
        this.#queijoImagem = queijoImagem;
    }

    toJSON() {
        return {
            'que_id': this.#queijoID,
            'que_nome': this.#queijoNome,
            'que_descricao': this.#queijoDescricao,
            'que_imagem': this.#queijoImagem
        }
    }

    async gravar() {
        const queijoDAO = new QueijoDAO();
        await queijoDAO.gravar(this);
    }

    async atualizar() {
        const queijoDAO = new QueijoDAO();
        await queijoDAO.atualizar(this);
    }

    async excluir() {
        const queijoDAO = new QueijoDAO();
        await queijoDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const queijoDAO = new QueijoDAO();
        return await queijoDAO.consultar(this, termoBusca);
    }
}