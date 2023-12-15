import Carne from "../Modelo/carne.js";
import conectar from "./conexao.js";

export default class CarneDAO {

    async gravar(carne) {
        if (carne instanceof Carne) {
            const sql = 'INSERT INTO tb_hamburguer (ham_nome, ham_descricao, ham_imagem) values (?,?,?)';
            const parametros = [carne.carneNome, carne.carneDescricao, carne.carneImagem];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            carne.carneID = resultado[0].insertId;

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(carne) {
        if (carne instanceof Carne) {
            const sql = 'UPDATE tb_hamburguer SET ham_nome = ?, ham_descricao = ?, ham_imagem = ? WHERE ham_id = ?';
            const parametros = [carne.carneNome, carne.carneDescricao, carne.carneImagem, carne.carneID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(carne) {
        if (carne instanceof Carne) {
            const sql = 'DELETE FROM tb_hamburguer WHERE ham_id = ?';
            const parametros = [carne.carneID];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);

            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(carne, termoBusca) {
        if (carne instanceof Carne) {
            let sql = ''
            if (termoBusca) {
                sql = `SELECT * FROM tb_hamburguer where ham_nome LIKE '%${termoBusca}%'`;
            } else {
                sql = "SELECT * FROM tb_hamburguer";
            }

            const conexao = await conectar();
            const [registros, campos] = await conexao.execute(sql);
            let listaCarnes = [];
            for (const registro of registros) {
                let item = new Carne(registro.ham_id, registro.ham_nome, registro.ham_descricao, registro.ham_imagem)
                listaCarnes.push(item);
            }
            global.poolConexoes.releaseConnection(conexao);
            return listaCarnes;
        }
    }
}