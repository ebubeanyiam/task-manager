require("./src/db/mongoose");
const Task = require("./src/models/tasks");

Task.findByIdAndDelete("5eba3f35d50c551c34b3d96b")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
