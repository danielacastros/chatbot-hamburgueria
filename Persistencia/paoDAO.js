import Pao from "../Modelo/pao.js";
import conectar from "./conexao.js";

export default class PaoDAO {

    async gravar(pao) {
        if (pao instanceof Pao) {
            const sql = 'INSERT INTO tb_pao (pao_nome, pao_descricao, pao_imagem) values (?,?,?)';
            const parametros = [pao.paoNome, pao.paoDescricao, pao.paoImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            pao.paoID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(pao) {
        if (pao instanceof Pao) {
            const sql = 'UPDATE tb_pao SET pao_nome = ?, pao_descricao = ?, pao_imagem = ? WHERE pao_id = ?';
            const parametros = [pao.paoNome, pao.paoDescricao, pao.paoImagem, pao.paoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(pao) {
        if (pao instanceof Pao) {
            const sql = 'DELETE FROM tb_pao WHERE pao_id = ?';
            const parametros = [pao.paoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(pao, termoBusca) {
        if (pao instanceof Pao) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_pao where pao_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_pao";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaPaes = [];
            for (const registro of registros) {
                let item = new Pao(registro.pao_id, registro.pao_nome, registro.pao_descricao, registro.pao_imagem)
                listaPaes.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaPaes;
        }
    }
}