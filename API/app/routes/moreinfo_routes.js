// note_routes.js
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
 //---------------------------------GET ALL INFORMATION------------------------------------
	app.get('/userinformation', (req, res) => {
    pool.getConnection(function(err, conn) {
  		if (err) throw err;
  		conn.query("select * from userinformation;", function (err, result, fields) {
    		if (err) throw err;
    		res.send(result);
    		conn.release();
  		});
	});
  });
	//---------------------------------POST MOReINFORMATION------------------------------------
  	app.post('/userinformation', (req, res) => {
    var guid = req.body.guid;
    console.log (guid);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var address = req.body.address;
    var postalcode = req.body.postalcode;
    res.send(req.body);
    pool.getConnection(function(err, conn) {
  		if (err) throw err;
  		var sql = 'INSERT INTO userinformation (GUID, FirstName, LastName, Address, PostalCode) VALUES ("'+ guid+'","'+ firstname+'", "'+ lastname+'", "'+ address+'", "'+ postalcode+'");';
  		conn.query(sql, function (err, result) {
    		if (err) throw err;
    		console.log("1 record inserted, ID: " + result.insertId);
    		conn.release();
  		});
	});
  });
  }
