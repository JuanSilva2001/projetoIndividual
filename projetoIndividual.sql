create database Libertadores;
use Libertadores;

create table Usuario(
	idUsuario int primary key auto_increment,
    apelidoUsu varchar (45) unique,
    emailUsu varchar (100),
    senhaUsu varchar(150)
);

select * from Times;

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
    Emblema varchar(45),
    golsFeitos int,
    golsLevados int,
    valorElenco varchar(20),
    fkPais int,
    foreign key (fkPais) references Pais(idPais) 
);

create table Artilheiros(
    idJogador int primary key auto_increment,
    nomeJogador varchar(45),
    qtdGols int,
    qtdGolsAtual int,
    fkPais int,
    foreign key (fkPais) references Pais(idPais) 
);

create table Assistência (
    idJogador int primary key auto_increment,
    nomeJogador varchar(45),
    qtdPasse int,
    qtdPasseAtual int,
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

create table Simulacao(
	idSimulacao int primary key auto_increment ,
	fkUsuario int,
	fkRodada int,
	foreign key (fkUsuario) references Usuario(idUsuario),
	foreign key (fkRodada) references Rodada(IdRodada)
);

create table Grupos(
    fkTime int,
    Grupo char(1),
    P int,
    J int,
    V int,
    D int,
    E int,
    GP int,
    GC int,
    SG int,
    Aproveitamento decimal(5,2),
    foreign key (fkTime) references Times(idTime)
);

create table Jogos(
    fkDados int,
    fkTimes int,
    golsFeitos int ,
    casaFora char(1),
    foreign key (fkDados) references dadosJogos(idJogos),
    foreign key (fkTimes) references Times(idTime)
);

create table jogoSimulacao (
    fkSimulacao int,
    fkTimes int,
    golsFeitos int, 
    casaFora char(1),
    foreign key (fkSimulacao) references Simulacao(idSimulacao),
    foreign key (fkTimes) references Times(idTime)
);