const { findTop } = require("../services/db/crudTop");


// 1 //
// Cette fonction permet d'appeler la fonction search lorsqu'on se situe sur la bonne URL
async function search(req, res, next) {
  try{
    const body = req.body;
    const result = await findTop(body);
    return res.send(result);
  }catch(e){
    console.error(`Il y a une erreur dans la fonction search : ${e}`)
  }
}

module.exports = {
  search
};
