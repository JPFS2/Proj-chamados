const db = require('./_database')

async function insertData(){
  await db.connect()
 
  // Candidato

  const queryCandidato = "INSERT INTO candidato (nome) VALUES ($1)"

  await db.query(queryCandidato, ['Candidato 1'])
  await db.query(queryCandidato, ['Candidato 2'])
  await db.query(queryCandidato, ['Candidato 3'])
  await db.query(queryCandidato, ['Candidato 4'])

  // eleitor 
  
  const queryIntegrantes = "INSERT INTO integrantes (nome, cpf, cidade, estado, wpp) VALUES ($1, $2 , $3, 4$, 5$)"

  await db.query(queryIntegrantes,['Eleitor 1', '11111111111', 'crato', 'ceara', '00000000001'])
  await db.query(queryIntegrantes,['Eleitor 2', '22222222222', 'exu', 'pernambuco', '00000000002'])
  await db.query(queryIntegrantes,['Eleitor 3', '33333333333', 'missao velha', 'ceara', '00000000003'])
  await db.query(queryIntegrantes,['Eleitor 4', '44444444444', 'barbalha', 'ceara', '00000000004'])
  await db.query(queryIntegrantes,['Eleitor 5', '55555555555', 'juazeiro', 'ceara', '00000000005'])
  await db.query(queryIntegrantes,['Eleitor 6', '66666666666', 'sao paulo', 'sao paulo', '00000000006'])

  // resultado

  const queryIntegrantesTarefas = "INSERT INTO candidato_eleitor (id_candidato, id_eleitor) VALUES ($1, $2)"

  await db.query(queryIntegrantesTarefas,[1, 5])
  await db.query(queryIntegrantesTarefas,[2, 4])
  await db.query(queryIntegrantesTarefas,[3, 1])
  await db.query(queryIntegrantesTarefas,[4, 2])
  await db.query(queryIntegrantesTarefas,[1, 3])
  await db.query(queryIntegrantesTarefas,[3, 6])

  await db.end()

  console.log("Dados Inseridos");
}

insertData()
