const knex = require('knex');
const express = require('express');
const router = express.Router()

router.route('/')
.get((req, res) => {
  knex('users').where().then((err,data) => {
    req.render('/users/index', (data) => {
      render: render;
    });
  });
});



module.exports = router
