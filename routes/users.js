const knex = require('knex');
const express = require('express');
const router = express.Router()

router.route('/')
.get((req, res) => {
  knex('users').select('id').then((results) => {
    // console.log(results);
    res.send('yo')
  })
})
// .post((req, res) => {
//   knex('users').insert({
//     full_name: req.body.user.full_name,
//     username: req.body.user.username,
//     img_url: req.body.user.img_url
//   })
//   .returning('id').then((id) => {
//     res.redirect(`/users/${id}`);
//   });
// });



module.exports = router
