'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Pais = sequelize.define('Pais',{	
		idPais: {
			field: 'idPais',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nomePais: {
			field: 'nomePais',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Pais', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Pais;
};
