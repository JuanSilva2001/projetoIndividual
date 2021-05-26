'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Jogos = sequelize.define('Jogos',{	
		fkDados: {
			field: 'fkDados',
			type: DataTypes.INTEGER,
			primaryKey: true
		},	
		fkTimes: {
			field: 'fkTimes',
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		golsFeitosJogo: {
			field: 'golsFeitosJogo',
			type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: true
		},
		casaFora: {
			field: 'casaFora',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Jogos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Jogos;
};
