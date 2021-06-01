create database Libertadores;
use Libertadores;

create table Usuario(
	idUsuario int primary key auto_increment,
    apelidoUsu varchar (45) unique,
    emailUsu varchar (100),
    senhaUsu varchar(150)
);

create table Rodada(
	idRodada int primary key auto_increment,
	faseRodada varchar(45),
	Fase varchar(45)
);

create table Pais(
	idPais int primary key auto_increment,
    nomePais varchar(15)
);

create table Times(
    idTime int primary key auto_increment,
    nomeTime varchar(45),
    Abreviacao char(3),
    Emblema char(7) unique,
    golsFeitos int check(golsFeitos>=0),
    golsLevados int check(golsLevados>=0),
    valorElenco decimal(5,2),
    fkPais int,
    foreign key (fkPais) references Pais(idPais) 
);

create table dadosJogos(
    idJogos int primary key auto_increment ,
    estadioJogo varchar(45),
    dia date,
    horas char(5),
    fkRodada int,
    foreign key (fkRodada) references Rodada(idRodada)
);

create table Grupos(
    fkTime int,
    Grupo char(1),
    P int,
    J int,
    V int,
    D int,
    E int,
    GP int check(GP>=0),
    GC int check(GC>=0),
    SG int,
    Aproveitamento decimal(5,2) check(Aproveitamento >=0 and Aproveitamento<=100.00),
    foreign key (fkTime) references Times(idTime)
);

create table Jogos(
    fkDados int,
    fkTimes int,
    golsFeitosJogo int ,
    primary key(fkDados,fkTimes),
    casaFora char(1) check (casaFora='C' or casaFora='F'),
    foreign key (fkDados) references dadosJogos(idJogos),
    foreign key (fkTimes) references Times(idTime)
);