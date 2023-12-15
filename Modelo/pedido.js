import PedidoDAO from "../Persistencia/pedidoDAO.js";


export default class Pedido {
    #pedidoID;
    #dataPedido;
    #itensPedidos;

    constructor(pedidoID = 0, dataPedido = "", itensPedidos = []) {
        this.#pedidoID = pedidoID;
        this.#dataPedido = dataPedido;
        this.#itensPedidos = itensPedidos;
    }

    get pedidoID() {
        return this.#pedidoID;
    }

    set pedidoID(pedidoID) {
        this.#pedidoID = pedidoID;
    }

    get dataPedido() {
        return this.#dataPedido;
    }

    set dataPedido(dataPedido) {
        this.#dataPedido = dataPedido;
    }

    get itensPedidos() {
        return this.#itensPedidos;
    }

    set itensPedidos(itensPedidos) {
        this.#itensPedidos = itensPedidos;
    }

    toJSON() {
        return {
            "ped_id": this.#pedidoID,
            "ped_data": this.#dataPedido,
            "ped_itens": this.#itensPedidos
        }
    }

    async gravar() {
        const pedidoDAO = new PedidoDAO();
        await pedidoDAO.gravar(this);
    }

    async atualizar() {

    }

    async excluir() {

    }

    async consultar(termoBusca) {

    }
}