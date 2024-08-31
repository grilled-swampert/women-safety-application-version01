const pool = require('../../database.js');
const getLogs = (req, res) => {
    pool.query("SELECT * FROM wsa", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
    /*console.log("Hello from controller");*/
};

module.exports = {
    getLogs
};