const db = require('./_database')
 
async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE candidato CASCADE`)
  await db.query(`DROP TABLE eleitor CASCADE`)
  await db.end()
  console.log("Tabelas removidas");
}

dropTables()