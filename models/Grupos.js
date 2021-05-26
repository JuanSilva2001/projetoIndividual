'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Grupo = sequelize.define('Grupo',{	
		fkTime: {
			field: 'fkTime',
			type: DataTypes.INTEGER,
            allowNull: false
		},	
		Grupo: {
			field: 'Grupo',
			type: DataTypes.STRING,
			allowNull: false
		},	
		P: {
			field: 'P',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        J: {
			field: 'J',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        V: {
			field: 'V',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        D: {
			field: 'D',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        E: {
			field: 'E',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        GP: {
			field: 'GP',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        GC: {
			field: 'GC',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        SG: {
			field: 'SG',
			type: DataTypes.INTEGER, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
        Aproveitamento: {
			field: 'Aproveitamento',
			type: DataTypes.REAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		},
	}, 
	{
		tableName: 'Grupos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Grupo;
};
