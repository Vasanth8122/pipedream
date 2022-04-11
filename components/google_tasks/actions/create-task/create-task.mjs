import app from "../../google_tasks.app.mjs";

export default {
  key: "google_tasks-create-task",
  name: "create task",
  description: "create task [See the docs here]()",
  version: "0.0.1",
  type: "action",
  props: {
    app,
  },
  async run({ $ }) {
    $.export("$summary", "Action successfully performed");
  },
};
