const express = require('express');
const data = require('../controllers/Data.controller');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({
    'hello': 'hi!'
  });
});
router.get('/list', data.getList);

module.exports = {
  routes: router
}