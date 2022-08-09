module.exports.iniciaChat = function(app, req, res) {
    const dados = req.body;
    
    req.assert('apelido', 'Nome/Apelido é obrigatório.').notEmpty();
    req.assert('apelido', 'Nome/Apelido dever conter entre 3 e 15 caracteres.').len(3, 15);

    const erros = req.validationErrors();

    if (erros) {
        res.render("index", {validacao: erros});
    }

    res.render('chat');
};