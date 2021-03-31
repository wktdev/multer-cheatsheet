let express = require("express");
let app = express();
let multer  = require('multer');
let upload = multer({ dest: 'uploads/' });

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: "public"
    });
});

app.post("/profile",upload.single('avatar'),function(req,res){
   console.log("worked!")
   console.log(req.file)
   res.redirect("/");

})



app.listen(3000);
console.log("server is running");