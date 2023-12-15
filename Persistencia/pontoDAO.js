import Ponto from "../Modelo/ponto.js";
import conectar from "./conexao.js";

export default class PontoDAO {

    async gravar(ponto) {
        if (ponto instanceof Ponto) {
            const sql = 'INSERT INTO tb_ponto (pon_nome, pon_descricao, pon_imagem) values (?,?,?)';
            const parametros = [ponto.pontoNome, ponto.pontoDescricao, ponto.pontoImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            ponto.pontoID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(ponto) {
        if (ponto instanceof Ponto) {
            const sql = 'UPDATE tb_ponto SET pon_nome = ?, pon_descricao = ?, pon_imagem = ? WHERE pon_id = ?';
            const parametros = [ponto.pontoNome, ponto.pontoDescricao, ponto.pontoImagem, ponto.pontoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(ponto) {
        if (ponto instanceof Ponto) {
            const sql = 'DELETE FROM tb_ponto WHERE pon_id = ?';
            const parametros = [ponto.pontoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(ponto, termoBusca) {
        if (ponto instanceof Ponto) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_ponto where pon_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_ponto";
            }
            
            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaPonto = [];
            for (const registro of registros) {
                let item = new Ponto(registro.pon_id, registro.pon_nome, registro.pon_descricao, registro.pon_imagem)
                listaPonto.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaPonto;
        }
    }
}