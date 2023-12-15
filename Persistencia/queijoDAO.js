import Queijo from "../Modelo/queijo.js";
import conectar from "./conexao.js";

export default class QueijoDAO {

    async gravar(queijo) {
        if (queijo instanceof Queijo) {
            const sql = 'INSERT INTO tb_queijo (que_nome, que_descricao, que_imagem) values (?,?,?)';
            const parametros = [queijo.queijoNome, queijo.queijoDescricao, queijo.queijoImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            queijo.queijoID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(queijo) {
        if (queijo instanceof Queijo) {
            const sql = 'UPDATE tb_queijo SET que_nome = ?, que_descricao = ?, que_imagem = ? WHERE que_id = ?';
            const parametros = [queijo.queijoNome, queijo.queijoDescricao, queijo.queijoImagem, queijo.queijoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(queijo) {
        if (queijo instanceof Queijo) {

            const sql = 'DELETE FROM tb_queijo WHERE que_id = ?';
            const parametros = [queijo.queijoID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(queijo, termoBusca) {
        if (queijo instanceof Queijo) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_queijo where que_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_queijo";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaQueijos = [];
            for (const registro of registros) {
                let queij = new Queijo(registro.que_id, registro.que_nome, registro.que_descricao, registro.que_imagem)
                listaQueijos.push(queij);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaQueijos;
        }
    }
}