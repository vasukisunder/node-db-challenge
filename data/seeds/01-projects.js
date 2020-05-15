
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Learn SQL', description: "", completed: 0},
        {id: 2, name: 'Clean house', description: "", completed: 0},
        {id: 3, name: 'Make dinner', description: "", completed: 0}
      ]);
    });
};
