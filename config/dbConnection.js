
var mysql = require('mysql');

module.exports = function () {
    
    return connection = mysql.createConnection({
        host: 'seu servidor',
        user: 'seu usuário',
        password: 'sua senha',
        database: 'seu banco de dados',
        insecureAuth: true
    })
};