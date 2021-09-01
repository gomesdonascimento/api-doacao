import { pool } from 'mssql';
import { getConnection, sql, queries } from '../database';

export const getDoacao = async (req,res) => {    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDoacao);
        //console.log(result);
        //res.json("rpa");
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewDoacao = async (req, res) => {
    
    const { cnpj,documento,data_hora,valor_doado,forma_pag } = req.body

    if (cnpj == null || documento == null || data_hora == null || valor_doado == null || forma_pag == null) {
        return res.status(400).json({msg: 'Bad request.'})
    }
    
    try {
        //console.log(nome,email);
    
        const pool = await getConnection();
        await pool.request()
        .input("cnpj", sql.VarChar, cnpj)
        .input("documento", sql.VarChar, documento)
        .input("data_hora", sql.DateTime, data_hora)
        .input("valor_doado", sql.Money, valor_doado)
        .input("forma_pag", sql.VarChar, forma_pag)
        .query(queries.addNewDoacao)

        res.json("nova doacao");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getDoacaoById = async (req, res)=> {
   
   const { id } = req.params;

   const pool = await getConnection()
   const result = await pool.request()
   .input("id", id)
   .query(queries.getDoacaoById);
   
   //console.log(result);
   res.send(result.recordsets[0]); 
}





