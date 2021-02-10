import { CronJob } from 'cron';
import { reboot } from 'electron-shutdown-command';

const autoRebootPlugin;

autoRebootPlugin.install = function (Vue, options) {
  Vue.prototype.$cronJob = function () {
    const { time } = options;
    const cronJob = new CronJob(time, () => {
      reboot();
    });

    cronJob.start();
  }
}

export default autoRebootPlugin;