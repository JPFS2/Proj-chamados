const db = require('./_database')

  // resultado

async function listData(){
  await db.connect()
  var result
  result = await db.query("select nome from candidato_eleitor;")
  console.log("Resultado: ")
  console.log(result.rows);

}

listData()
