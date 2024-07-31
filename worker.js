const { Worker } = require("bullmq");

const sendMail = () => new Promise((res, rej) => setTimeout(() => res(), 5000));

const worker = new Worker(
  "email-queue",
  async (job) => {
    try {
      console.log("Message received id:", job.id);
      console.log("Sending mail to: ", job.data.email);
      await sendMail();
      console.log("Email Sent");
    } catch (error) {
      console.error(`Failed to send email for job ${job.id}:`, error);
    }
  },
  {
    connection: {
      host: "127.0.0.1",
      port: "6379",
    },
  }
);
