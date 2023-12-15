import Pedido from "../Modelo/pedido.js";
import conectar from "./conexao.js";

export default class PedidoDAO {
    async gravar(pedido) {
        if (pedido instanceof Pedido) {
            const conexao = await conectar();

            let sql = `INSERT INTO tb_pedido (ped_data) VALUES (?);`;
            let parametros = [pedido.dataPedido];
            const resultado = await conexao.execute(sql, parametros);
            pedido.id = resultado[0].insertId;



            sql = `
                    INSERT INTO tb_pedido_hamburguer(pao_id, que_id, ham_id, aco_id, pon_id, sal_id, beb_id, ped_id)
                    VALUES (?,?,?,?,?,?,?,?);
                `
            parametros = [pedido.itensPedidos[0].pao.pao_id, pedido.itensPedidos[0].queijo.que_id, pedido.itensPedidos[0].hamburguer.ham_id, pedido.itensPedidos[0].acompanhamento.aco_id, pedido.itensPedidos[0].ponto.pon_id, pedido.itensPedidos[0].salada.sal_id, pedido.itensPedidos[0].bebida.beb_id, pedido.id];
            await conexao.execute(sql, parametros);


            global.poolConexoes.releaseConnection(conexao);
        }
    }
}