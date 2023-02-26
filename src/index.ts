require('dotenv').config();

import { sleepWithProgress } from './libs/utils';

const processScript = async () => {
  await sleepWithProgress(1000);
};

processScript()
  .then(() => {
    console.log('DONE');
  })
  .catch((error) => console.error(error));
