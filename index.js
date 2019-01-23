var mysql = require("mysql");
var inquirer = require("inquirer");
// var cTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "IJ-25-jo",
  database: "kamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("connected as id " + connection.threadId);
  startPurchase();
});

function startPurchase() {
  connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, res) {
    if (err) throw err;

    console.table(res);
  });
  promptUser();
};

function promptUser() {

  inquirer
    .prompt([{
        name: "userchoice",
        type: "input",
        message: "Please enter the id of the product you would like to purchase:",
        validate: function (value) {
          if (isNaN(value)) {
            console.log("Please enter a valid id number")
          }
          return true;
        }
      },
      {
        name: "quant",
        type: "input",
        message: "Please enter the quantity you would like to purchse:",
        validate: function (value) {
          if (isNaN(value)) {
            console.log("Please enter a number")
          }
          return true;
        }
      }
    ])

    .then(function (answer) {
      connection.query("SELECT item_id, stock_quantity FROM products WHERE ?",
        [{
          item_id: answer.userchoice
        }],
        function (err, res) {

          if (res[0].stock_quantity < answer.quant) {
            console.log("Sorry! That product is out of stock! Please try selecting another product...");
          } else {
            var userQuant = answer.quant;
            var userId = answer.userchoice;
            var newQuant = res[0].stock_quantity - answer.quant;

            buy(newQuant, userId);
            total(userId, userQuant);
          }
        })
    })
};

function buy(newQuant, userId) {
  connection.query("UPDATE products SET ? WHERE ?",
    [{
      stock_quantity: newQuant
    }, {
      item_id: userId
    }]
  )
}

function total(userId, userQuant) {
  connection.query("SELECT price, stock_quantity FROM products WHERE ?",
    [{
      item_id: userId
    }],
    function (err, res) {
      if (err) throw err;

      console.log("Total Price: $" + res[0].price * userQuant)
    })

  connection.end();
}