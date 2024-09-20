require('dotenv').config();

import { sleep } from './libs/utils';

const processScript = async () => {
  await sleep(1000);
};

processScript()
  .catch((error) => console.error(error))
  .finally(() => console.log('Exiting...'));
