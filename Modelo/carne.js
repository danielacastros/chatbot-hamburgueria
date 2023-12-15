import CarneDAO from "../Persistencia/carneDAO.js";

export default class Carne {
    #carneID;
    #carneNome;
    #carneDescricao;
    #carneImagem;

    constructor(carneID, carneNome, carneDescricao, carneImagem) {
        this.#carneID = carneID;
        this.#carneNome = carneNome;
        this.#carneDescricao = carneDescricao;
        this.#carneImagem = carneImagem;
    }

    get carneID() {
        return this.#carneID;
    }

    set carneID(carneID) {
        this.#carneID = carneID;
    }

    get carneNome() {
        return this.#carneNome;
    }

    set carneNome(carneNome) {
        this.#carneNome = carneNome;
    }

    get carneDescricao() {
        return this.#carneDescricao;
    }

    set carneDescricao(carneDescricao) {
        this.#carneDescricao = carneDescricao;
    }

    get carneImagem() {
        return this.#carneImagem;
    }

    set carneImagem(carneImagem) {
        this.#carneImagem = carneImagem;
    }

    toJSON() {
        return {
            'car_id': this.#carneID,
            'car_nome': this.#carneNome,
            'car_descricao': this.#carneDescricao,
            'car_imagem': this.#carneImagem
        }
    }

    async gravar() {
        const carneDAO = new CarneDAO();
        await carneDAO.gravar(this);
    }

    async atualizar() {
        const carneDAO = new CarneDAO();
        await carneDAO.atualizar(this);
    }

    async excluir() {
        const carneDAO = new CarneDAO();
        await carneDAO.excluir(this);
    }

    async consultar(termoBusca) {
        const carneDAO = new CarneDAO();
        return await carneDAO.consultar(this, termoBusca);
    }
}