const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'jourdangundersen',

    password: 'SpaghettiTaco123',
    database: 'top_songsDB',
  });

connection.connect(function (error){
    if (error){
        throw error
    }
    displayUserOptions()
});

function displayUserOptions(){
    console.log("mysql connected")
};