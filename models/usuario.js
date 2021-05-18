	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		apelido: {
			field: 'apelidoUsu',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'emailUsu',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUsu',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
