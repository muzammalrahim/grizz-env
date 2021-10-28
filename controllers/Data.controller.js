'use strict';
const { db } = require('../db');


exports.getList = async(req, res) => {
  // Make sure to parse the limit to number
  var query = "SELECT * FROM testing";
  try {
    await db.query(query, async (err, db_res) => {
      if(err) {
        console.log(err)
      }
      else{
        res.send(db_res.rows)
      }
    })

  } catch (error) {
    res.status(400).send(error.message);
  }
}