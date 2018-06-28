/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 *
 * See: https://gist.github.com/JedWatson/10739959
 */

exports.create = {
  User: [
    {
      "name.first": "Admin",
      "name.last": "User",
      username: "Admin User",
      email: "admin@keystonejs.com",
      password: "admin",
      isAdmin: true,
      isVerified: true
    }
  ]
};
