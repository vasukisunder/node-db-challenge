
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Internet', description: ""},
        {id: 2, name: 'Soap', description: ""},
        {id: 3, name: 'Book', description: ""}
      ]);
    });
};
