// routes/index.js
const productRoutes = require('./products_routes');
const noteRoutes = require('./users_routes');
const moreinfoRoutes = require('./moreinfo_routes')
module.exports = function(app, db) {
  noteRoutes(app, db);
  productRoutes(app, db);
  moreinfoRoutes(app, db);
  // Other route groups could go here, in the future

};

