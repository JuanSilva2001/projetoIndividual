'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Time = sequelize.define('Time',{	
		idTime: {
			field: 'idTime',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		estadioJogo: {
			field: 'estadioJogo',
			type: DataTypes.STRING,
			allowNull: false
		},
		Abreviacao: {
			field: 'Abreviacao',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		Emblema: {
			field: 'Emblema',
			type: DataTypes.STRING,
			allowNull: false
		},
		golsFeitos: {
            field: 'golsFeitos',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        golsLevados: {
			field: 'golsLevados',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		valorElenco: {
			field: 'valorElenco',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		fkPais: {
            field: 'fkPais',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: false
		}
	}, 
	{
		tableName: 'Times', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Time;
};
