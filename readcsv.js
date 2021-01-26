const fs = require("fs");
const Pool = require("pg").Pool;
const fastcsv = require("fast-csv");
var csv = require('csv-parser')
var data = []

fs.createReadStream('5m Sales Records.csv')
  .pipe(csv())
  .on('data', function (row) {
    data.push(row)
  })
  .on('end', function () {
    console.log('Data loaded')

    const query =
      "INSERT INTO userss (Region ,Country , Itemtype,Sales ,OrderPrice ,OrderDate ,OrderId ,ShipDate ,UnitsSold ,  UnitPrice ,UnitCost ,TotalRevenue ,TotalCost ,TotalProfit ) VALUES ($1, $2, $3,$4,$5 ,$6 ,$7 ,$8 ,$9,$10,$11 ,$12 ,$13 ,$14)";
      

      
    pool.connect((err, client, done) => {
    //   if (err) throw err;

      try {
        csvData.forEach(row => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });
