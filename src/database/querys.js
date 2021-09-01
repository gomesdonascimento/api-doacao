export const queries  = {

    getAllDoacao : 'SELECT * FROM tb_doacao',
    addNewDoacao : 'INSERT INTO tb_doacao(cnpj,documento,data_hora,valor_doado,forma_pag) VALUES (@cnpj,@documento,@data_hora,@valor_doado,@forma_pag)',
    getDoacaoById : 'SELECT * FROM tb_doacao WHERE id = @id' 
}

