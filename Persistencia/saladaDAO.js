import Salada from "../Modelo/salada.js";
import conectar from "./conexao.js";

export default class SaladaDAO {

    async gravar(salada) {
        if (salada instanceof Salada) {
            const sql = 'INSERT INTO tb_salada (sal_nome, sal_descricao, sal_imagem) values (?,?,?)';
            const parametros = [salada.saladaNome, salada.saladaDescricao, salada.saladaImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            salada.saladaID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(salada) {
        if (salada instanceof Salada) {
            const sql = 'UPDATE tb_salada SET sal_nome = ?, sal_descricao = ?, sal_imagem = ? WHERE sal_id = ?';
            const parametros = [salada.saladaNome, salada.saladaDescricao, salada.saladaImagem, salada.saladaID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(salada) {
        if (salada instanceof Salada) {
            const sql = 'DELETE FROM tb_salada WHERE sal_id = ?';
            const parametros = [salada.saladaID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(salada, termoBusca) {
        if (salada instanceof Salada) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_salada where sal_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_salada";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaSalada = [];
            for (const registro of registros) {
                let item = new Salada(registro.sal_id, registro.sal_nome, registro.sal_descricao, registro.sal_imagem)
                listaSalada.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaSalada;
        }
    }
}