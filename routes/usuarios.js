var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.login; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = converter(req.body.senha); // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from Usuario where apelidoUsu='${login}' and senhaUsu='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.emailUsu);
			console.log('sessoes: ',sessoes);
			console.log(resultado[0].dataValues.emailUsu);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	console.log('Criando um usuário');
	
	Usuario.create({
		apelido : req.body.apelido,
		email : req.body.email,
		senha: converter(req.body.senha)
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


/* Verificação de usuário */
router.get('/sessao/:email', function(req, res, next) {
	let login = req.params.email;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			console.log(sessoes);
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
		console.log(sessoes[0]);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;

function converter(Senha) {
    {
        var num1=Number(Senha[0].charCodeAt(0).toString()[0]);
        var num2=Number(Senha[0].charCodeAt(0).toString()[1]);
        var Binario = '';
        var Zeros ='';
        for (var i = 0; i < Senha.length; i++) {
            var Octal = Senha[i].charCodeAt(0).toString(8); //Pegando o decimal de cada Digito na tabela ASCII e passando para octal
            var Decimal = Number(Octal.replace(/1/g,8)); //Transformando o que tiver de 1 no octal e passando para 8
            var binarioDecimal = Decimal.toString(2); //Transformando o decimal para binario
            if(binarioDecimal.length<12){
                for( var cont = binarioDecimal.length ; cont < 10 ; cont++)
                {
                    Zeros += '0';//Descobre quantos 0 a esquerda o binario tem
                }
                Binario +=Zeros + binarioDecimal; //Colocando os 0
                Zeros=''; //Zerando os 0
            }
        } 
        Binario = Binario.replace(/1/g,num1);
        Binario = Binario.replace(/0/g,num2);
        return Binario;
    }
}