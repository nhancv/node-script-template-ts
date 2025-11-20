import BN from 'bignumber.js';
import pino from 'pino';
import { PRECISION_SETTING, prettyNum } from 'pretty-num';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname', // Hide pid and hostname
      translateTime: 'SYS:standard', // Format timestamp
      singleLine: true, // Print log in single line
    },
  },
});

// Delay
export const sleep = (ms: number, printLog = true) => {
  printLog && logger.info(`Sleeping ${ms / 1000} seconds`);
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Remove number as key
export const normObj = (originalObj: Record<string, any>, stringify = false) => {
  const obj: Record<string, any> = {};
  for (const [key, value] of Object.entries<any>(originalObj)) {
    if (isNaN(Number(key))) obj[key] = value?.toString();
  }
  return stringify ? JSON.stringify(obj) : obj;
};

// Clone array of objects (lv 1)
export const copyArrayObjs = (array: any[]) => {
  return array.map((v) => {
    return JSON.parse(JSON.stringify(v));
  });
};

// Returns a random float number between min and max (both included)
export const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

// Random boolean
export const randomBool = (chance = 0.5) => {
  return Math.random() <= chance;
};

// Sleep before execute callback
export const delayWrapper = async (duration: number, callback: any) => {
  await sleep(duration);
  return callback;
};

/**
 * Safety sum of float numbers
 * - Native way: 0.026 + 0.6245 = 0.6505000000000001
 * - Safe way: 0.026 + 0.6245 = 0.6505
 * @param args
 */
export const safeFloats = (args: number[]) => {
  let s = 0;
  args.forEach((v) => (s = BN(s).plus(v).toNumber()));
  return s;
};

export const parseBool = (n: any) => n === true || n === 'true' || Number(n) === 1;

/**
 * Return env variable with boolean parsed
 * @param key
 * @param def
 */
export const pEnv = (key: string, def: any = undefined) => {
  const t = process.env[key];
  return t === 'true' ? true : t === 'false' ? false : (t ?? def);
};

/**
 * Variable return true if dev mode
 */
export const isDev = () => ['prod', 'production'].includes(pEnv('NODE_ENV'));

/**
 * formatStr(0) => '0.000000000000000000'
 * formatStr(0, 1) => '0.0'
 * formatStr(0, 1, 4, *) => '*0.0'
 * formatStr(0, 1, 4, *, 5, -) => '*0.0-'
 */
export const formatStr = (
  amount: number | string,
  decimals = 18,
  padStart = 0,
  padStartChar = '',
  padEnd = 0,
  padEndChar = '',
) => {
  return prettyNum(amount, { precision: decimals, precisionSetting: PRECISION_SETTING.FIXED })
    .padStart(padStart, padStartChar)
    .padEnd(padEnd, padEndChar);
};

// Round decimals
export const nround = (n: number | string) => Math.round(Number(n) * 10000) / 10000;
// Return current timestamp in seconds
export const nowSec = (offset = 0) => Math.floor(Date.now() / 1000) + offset;
// Return current time with local formatted
export const nowLocal = () => new Date();
