const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(process.env.PORT || 3001, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});