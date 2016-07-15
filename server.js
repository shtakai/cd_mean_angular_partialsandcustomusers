const mongoose = require('mongoose'),
  express      = require('express'),
  path         = require('path'),
  root         = __dirname,
  port         = process.env.PORT || 8000;
let app = express();

app.use(express.static( path.join(root, 'client') ));
app.use(express.static( path.join(root, 'bower_components' )));



let server = app.listen(port, ()=>{
  console.log(`server runngin on port ${port}`);
});
