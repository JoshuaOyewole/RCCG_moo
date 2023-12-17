import cron from 'node-cron';
import {sendBirthdayMessages} from "./index"

// Schedule a task to run every day at a specific time (adjust time as needed)
cron.schedule('0 6 * * *', async () => {
  await sendBirthdayMessages(); // Call your function to send birthday messages
}, {
  scheduled: true,
  timezone: 'Africa/Lagos' // Specify your timezone (e.g., 'America/New_York')
});
