const { userAuthentication, getAllUsers } = require('../controllers/UserController')

module.exports = function () {
  return [
    {
      method: 'POST',
      path: '/user/authentication',
      handler: userAuthentication
    },
    {
      method: 'GET',
      path: '/users',
      handler: getAllUsers
    }
  ]
}()