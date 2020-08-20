const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://junior:cachorro@cluster0.52knf.mongodb.net/scheduling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const controller = {};


controller.login = async (req, res) => {
  let banco = await (await client.connect()).db('scheduling');
  banco.collection("user").find({ email: req.body.email, password: req.body.password }).toArray(function (err, result) {
    if (err) throw err;
    res.status(200).json(result)
  })
  .catch(function (err) {
    res.status(500).send(err);
  });
}



module.exports = controller;
