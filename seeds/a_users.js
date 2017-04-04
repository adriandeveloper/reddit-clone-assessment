
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {full_name: 'Jeff Townsend', username: 'djjazzyjeff', img_url: 'http://bit.ly/2oygAfe'},
        {full_name: 'Joseph Saddler', username: 'grandmasterflash', img_url: 'http://bit.ly/2oETWyy'},
        {full_name: 'Anthony Williams', username: 'rocraida', img_url: 'http://bit.ly/2oyRVGT'},
        {full_name: 'Jason Williams Mizell', username: 'jammasterjay', img_url: 'http://bit.ly/2oyZXzp'}
      ]);
    });
};
