import BN from 'bignumber.js';
import { prettyNum, PRECISION_SETTING } from 'pretty-num';

// Delay
export const sleep = (ms, printLog = true) => {
  printLog && console.log(`Sleeping ${ms / 1000} seconds`);
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Remove number as key
export const normObj = (originalObj, stringify = false) => {
  const obj = {};
  for (const [key, value] of Object.entries<any>(originalObj)) {
    if (isNaN(Number(key))) obj[key] = value?.toString();
  }
  return stringify ? JSON.stringify(obj) : obj;
};

// Clone array of objects (lv 1)
export const copyArrayObjs = (array) => {
  return array.map((v) => {
    return JSON.parse(JSON.stringify(v));
  });
};

// Returns a random float number between min and max (both included)
export const randomNumber = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

// Random boolean
export const randomBool = (chance = 0.5) => {
  return Math.random() <= chance;
};

// Sleep before execute callback
export const delayWrapper = async (duration, callback) => {
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

export const parseBool = (n) => n === true || n === 'true' || Number(n) === 1;

/**
 * Return env variable with boolean parsed
 * @param key
 * @param def
 */
export const pEnv = (key: string, def: any = undefined) => {
  const t = process.env[key];
  return t === 'true' ? true : t === 'false' ? false : t ?? def;
};

/**
 * Variable return true if dev mode
 */
export const isDev = () => pEnv('NODE_ENV') !== 'production';

/**
 * formatStr(0) => '0.000000000000000000'
 * formatStr(0, 1) => '0.0'
 * formatStr(0, 1, 4, *) => '*0.0'
 * formatStr(0, 1, 4, *, 5, -) => '*0.0-'
 */
export const formatStr = (amount, decimals = 18, padStart = 0, padStartChar = '', padEnd = 0, padEndChar = '') => {
  return prettyNum(amount, { precision: decimals, precisionSetting: PRECISION_SETTING.FIXED })
    .padStart(padStart, padStartChar)
    .padEnd(padEnd, padEndChar);
};

// Round decimals
export const nround = (n) => Math.round(Number(n) * 10000) / 10000;
// Return current timestamp in seconds
export const nowSec = (offset = 0) => Math.floor(Date.now() / 1000) + offset;
// Return current time with local formatted
export const nowLocal = () => new Date();
