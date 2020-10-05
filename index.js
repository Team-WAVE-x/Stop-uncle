const max = 5000 //일일 요청한도
const express = require('express')
const ajegag = require('./ajegag.json')
const schedule = require('node-schedule')
const bodyParser = require('body-parser');
const repeat = schedule.scheduleJob('* * 0 * *', function(){
  let coll = db.collection('tokens');
  let allTokens = coll.get().then(snapshot => {
          snapshot.forEach(doc => {
          let temp_token = doc.data().token
          db.collection('tokens').doc(temp_token).update({
            'call_count':0
          }) 
  });
  }).catch(err => {
      console.log('Error getting documents', err);
      });  
  console.log('api 요청한도 초기화됨')
})

const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("./src/databasekey.json");

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: "https://stop-uncle.firebaseio.com"
});

const db = admin.firestore();

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res) {
  const { quiz } = req.query
  const req_token = req.get('token')
  db.collection('tokens').doc(req_token).get().then((database) =>{
    if(!database.exists){
      if (quiz === 'exonbabo') {
        res.send('와 엑슨바보 아시는구나').end()
        return
      }else{
        res.status(401).send({ message: "Unknown token" }).end();
        return
      }
    }else if(database.data().is_banned){
      res.status(403).send({ message: "banned token" }).end();
      return
    }else{
      if(database.data().call_count >= max){
        res.status(202).send({ message: "daily limit exceeded" }).end();
      }else{
        db.collection('tokens').doc(req_token).update({
          'call_count':database.data().call_count+1
        }) 
        if (quiz === 'random') res.send(ajegag.problems[Math.floor(Math.random() * ajegag.problems.length)])
        else if (ajegag.problems[quiz]) res.send(ajegag.problems[quiz]).end()
        else if (quiz === 'exonbabo') res.send('와 엑슨바보 아시는구나').end()
        else res.send('ERROR').end()
      }
    }

})

});

app.listen(8080, () => console.log('Server is running...'))
