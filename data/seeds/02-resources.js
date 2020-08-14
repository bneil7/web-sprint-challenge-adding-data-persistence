exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Wikipedia",
          resource_description: "the interwebsss",
        },
        {
          id: 2,
          resource_name: "Public Library",
          resource_description: "like the internet made out of paper",
        },
      ]);
    });
};
