// note_routes.js
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
 //---------------------------------GET ALL USERS------------------------------------
	app.get('/users', (req, res) => {
    pool.getConnection(function(err, conn) {
  		if (err) throw err;
  		conn.query("select * from users;", function (err, result, fields) {
    		if (err) throw err;
    		res.send(result);
    		conn.release();
  		});
	});
  });
	//---------------------------------POST USER------------------------------------
  	app.post('/users', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    res.send(req.body);
    pool.getConnection(function(err, conn) {
  		if (err) throw err;
  		var sql = 'INSERT INTO Users (Username, Password) VALUES ("'+ username+'", "'+ password+'");';
  		conn.query(sql, function (err, result) {
    		if (err) throw err;
    		console.log("1 record inserted, ID: " + result.insertId);
    		conn.release();
  		});
	});
  });



//-----------get user (LOGIN)-----------------------------
   app.get('/users/:username/:password', (req, res) => {
    var username = req.params.username;
    var password = req.params.password;
    console.log(username);
    console.log(password);
    
    pool.getConnection(function(err, conn) {
      if (err) throw err;
      conn.query('SELECT * FROM Users WHERE UserName = "'+ username+'" AND Password = "'+ password+'"', function (err, result, fields) {
        conn.release();
        if (err) throw err;
        res.send(result);
      });
    });
  });
 }