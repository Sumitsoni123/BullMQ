const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

const init = async () => {
  const res = await notificationQueue.add("email to ekta", {
    email: "ektasoni315@gmail.com",
    subject: "job application",
    body: "Hired",
  });

  console.log("Job added to Queue", res.id);
};

init();
