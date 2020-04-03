const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var url = require('url');
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('static'));
var dialog = require('dialog'); 
app.post('/example', (req, res) => {
    var a = req.body.queryResult.execute
    if(a==notepad){
    var childProcess = require('child_process');
childProcess.exec('start notepad', function (err, stdout, stderr) {
        if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    process.exit(0);// exit process once it is opened
})
}
})
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.listen(process.env.PORT || 8000, function() {
    console.log("Server up and listening");
  });
  
