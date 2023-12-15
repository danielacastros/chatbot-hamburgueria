import Bebida from "../Modelo/bebida.js";
import conectar from "./conexao.js";

export default class BebidaDAO {

    async gravar(bebida) {
        if (bebida instanceof Bebida) {
            const sql = 'INSERT INTO tb_bebida (beb_nome, beb_descricao, beb_imagem) values (?,?,?)';
            const parametros = [bebida.bebidaNome, bebida.bebidaDescricao, bebida.bebidaImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            bebida.bebidaID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(bebida) {
        if (bebida instanceof Bebida) {
            const sql = 'UPDATE tb_bebida SET beb_nome = ?, beb_descricao = ?, beb_imagem = ? WHERE beb_id = ?';
            const parametros = [bebida.bebidaNome, bebida.bebidaDescricao, bebida.bebidaImagem, bebida.bebidaID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(bebida) {
        if (bebida instanceof Bebida) {
            const sql = 'DELETE FROM tb_bebida WHERE beb_id = ?';
            const parametros = [bebida.bebidaID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(bebida, termoBusca) {
        if (bebida instanceof Bebida) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_bebida where beb_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_bebida";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaBebidas = [];
            for (const registro of registros) {
                let item = new Bebida(registro.beb_id, registro.beb_nome, registro.beb_descricao, registro.beb_imagem)
                listaBebidas.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaBebidas;
        }
    }
}