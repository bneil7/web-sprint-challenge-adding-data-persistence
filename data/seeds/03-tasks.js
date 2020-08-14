exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 1,
          task_name: "the first project task",
          task_description: "something about project 1",
          task_notes: "really dont wanna fill out notes",
          completed_task: true,
        },
        {
          id: 2,
          project_id: 2,
          task_name: "Go to library",
          task_description: "Catch an uber to the library and read stuff there",
          task_notes: "filler notes go here",
          completed_task: true,
        },
      ]);
    });
};
