import { logger, sleep } from '~/libs/utils';

const processScript = async () => {
  await sleep(1000);
};

processScript()
  .catch((error) => logger.error(error))
  .finally(() => logger.info('Exiting...'));
