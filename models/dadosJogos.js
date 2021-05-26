'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Dados = sequelize.define('Dados',{	
		idJogos: {
			field: 'idJogos',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		estadioJogo: {
			field: 'estadioJogo',
			type: DataTypes.STRING,
			allowNull: false
		},
		dia: {
			field: 'dia',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		horas: {
			field: 'horas',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		fkRodada: {
			field: 'fkRodada',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'dadosJogos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Dados;
};
