// boite.js
const conf = require('../../conf.json')
const db = require('../../services/db/connection'); // Assurez-vous que le chemin est correct

// 1 //
/**
 * Cette fonction va permettre de récupérer un utilisateur à partir de son pseudo
 * @param {*} collectionName Nom de la collection 
 * @param {*} where WHERE de la requête
 * @returns Le résultat de la requête
 */
async function findTop() {
  try {

    var query;
    var query = `SELECT pseudo, score FROM Utilisateur ORDER BY score DESC`;
    
    const top = await db.any(query);
    return top;   
  } catch (e) {
    console.error(`Il y a une erreur dans la fonction findTop : ${e}`);
    throw e;
  }
}


module.exports = {
  findTop
};