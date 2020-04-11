const connection = require("./connection")


const orm = {
    selectAll: () => {
        
        connection.query("SELECT * FROM burger;", (err, result) => {
            if (err) throw err;
            return result;
        })
    },

    insertOne: (burgerInput) => {
        connection.query("INSERT INTO burgers (burger_name) VALUES ? ", [burgerInput], (err, result) => {
            if (err) throw err;
            return result
        })
    },

    updateOne: (burgerInput, burgerId) => {
        connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [burgerInput, burgerId], (err, result) => {
            if (err) throw err;

            return result;
        })
    }
}

module.exports = orm;