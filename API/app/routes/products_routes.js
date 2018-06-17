// note_routes.js
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
 //---------------------------------GET ALL USERS------------------------------------
	app.get('/products', (req, res) => {
    pool.getConnection(function(err, conn) {
  		if (err) throw err;
  		conn.query("select * from products;", function (err, result, fields) {
    		if (err) throw err;
    		res.send(result);
    		conn.release();
  		});
	});
  });
};