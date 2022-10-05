const db = require('./_database')

async function createTables(){
  await db.connect()
  // tabela veículo
  await db.query(`create table candidato(
    id serial primary key,
    nome varchar(40) not null
  )`)

  // tabela 
  await db.query(`create table eleitor(
    id serial primary key,
    nome varchar(40) not null,
    cpf int(11) not null,
    cidade varchar(15) not null,
    estado varchar() not null,
    wpp int(12) not null,
    id_candidato integer,
    foreign key (id_candidato) references candidato(id)
  )`)
  // tabela resultado
  await db.query(`create table candidato_eleitor(
    id_candidato integer,
    id_eleitor integer,
    foreign key (id_candidato) references integrantes(id),
    foreign key (id_eleitor) references tarefas(id)
  )`)

  await db.end()

  console.log("Tabelas Criadas");
}

createTables()