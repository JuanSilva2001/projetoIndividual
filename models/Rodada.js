'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Rodada = sequelize.define('Rodada',{	
		idRodada: {
			field: 'idRodada',
			type: DataTypes.INTEGER,
			primaryKey: true
		},	
		faseRodada: {
			field: 'faseRodada',
			type: DataTypes.STRING,
			allowNull: false
		},
		Fase: {
			field: 'Fase',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: true
		}
	}, 
	{
		tableName: 'Rodada', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Rodada;
};
