var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var dadosJogos = require('../models').dadosJogos;
var Jogos = require('../models').Jogos;
var Rodada = require('../models').Rodada;
var Times = require('../models').Times;
var Pais = require('../models').Pais;

router.get('/Partida/:qualRodada', function(req,res,next){
	console.log(`Pegando Partida`);
	var qualRodada = Number(req.params.qualRodada);
	switch (qualRodada){
		case 0:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 1 and 2`;
		break;
		case 1:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 3 and 4`;
		break;
		case 2:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 5 and 6`;
		break;
		case 3:
			var SQL = `select * from Grupos inner join Times on fkTime=idTime order by Grupo asc, P desc, SG desc, V desc;`;
		break;
		case 4:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 13 and 14`;
		break;
		case 5:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 15 and 16`;
		break;
		case 6:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada between 17 and 18`;
		break;
		case 7:
			var SQL = `select * from Jogos inner join dadosJogos on fkDados=idJogos inner join Times
			on fkTimes=idTime where fkRodada =19`;
		break;
	}
	console.log(SQL);
	sequelize.query(SQL, {
		model: Jogos
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

router.get('/partidasGrupos/:qualRodada', function (req, res, next){
	var SQL= '';

});

module.exports = router;
