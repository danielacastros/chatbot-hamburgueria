import Acompanhamento from "../Modelo/acompanhamento.js";
import conectar from "./conexao.js";

export default class AcompanhamentoDAO {

    async gravar(acompanhamento) {
        if (acompanhamento instanceof Acompanhamento) {
            const sql = 'INSERT INTO tb_acompanhamento (aco_nome, aco_descricao, aco_imagem) values (?,?,?)';
            const parametros = [acompanhamento.acompanhamentoNome, acompanhamento.acompanhamentoDescricao, acompanhamento.acompanhamentoImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            acompanhamento.acompanhamentoID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(acompanhamento) {
        if (acompanhamento instanceof Acompanhamento) {
            const sql = 'UPDATE tb_acompanhamento SET aco_nome = ?, aco_descricao = ?, aco_imagem = ? WHERE aco_id = ?';
            const parametros = [acompanhamento.acompanhamentoNome, acompanhamento.acompanhamentoDescricao, acompanhamento.acompanhamentoImagem, acompanhamento.acompanhamentoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(acompanhamento) {
        if (acompanhamento instanceof Acompanhamento) {
            const sql = 'DELETE FROM tb_acompanhamento WHERE aco_id = ?';
            const parametros = [acompanhamento.acompanhamentoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(acompanhamento, termoBusca) {
        if (acompanhamento instanceof Acompanhamento) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_acompanhamento where aco_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_acompanhamento";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaAcompanhamentos = [];
            for (const registro of registros) {
                let item = new Acompanhamento(registro.aco_id, registro.aco_nome, registro.aco_descricao, registro.aco_imagem)
                listaAcompanhamentos.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaAcompanhamentos;
        }
    }
}