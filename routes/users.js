'use strict';

const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router()

router.route('/')
.get((req, res) => {
  knex('users').then((user) => {
    res.render('users/index', {user: user})
  })
})
.post((req, res) => {
  knex('users').insert(req.body.user).returning('id').then((id) => {
    res.redirect(`/users/${id}`)
  })
})



module.exports = router
