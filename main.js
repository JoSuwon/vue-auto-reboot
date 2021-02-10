import { CronJob } from 'cron';
import { reboot } from 'electron-shutdown-command';

export default {
  install(Vue, options) {
    const { time } = options;
    const cronJob = new CronJob(time, () => {
      reboot();
    });
    cronJob.start();
  }
}