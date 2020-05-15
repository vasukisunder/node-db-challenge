
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, projectID: 1, description: 'Watch tutorials online', notes: ""},
        {id: 2, projectID: 2, description: 'Vacuum floor', notes: ""},
        {id: 3, projectID: 2, description: 'Do laundry', notes: ""},
        {id: 4, projectID: 3, description: 'Boil water', notes: ""},
        {id: 5, projectID: 3, description: 'Add pasta', notes: ""}
      ]);
    });
};
