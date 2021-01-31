/* eslint-disable no-console */
import { colors } from './consts';

export const enum logLevel {
  Debug = 'Debug',
  Info = 'Info',
  Warn = 'Warn',
  Error = 'Error',
}

export const enum logTarget {
  console = 'console',
  fileSystem = 'fileSystem',
}

/**
 * custom Logger
 */
export const getLogger = (
  componentName: string,
): {
  raw: (message: unknown) => void;
  info: (message: unknown) => void;
  error: (message: unknown) => void;
  debug: (message: unknown) => void;
  warn: (message: unknown) => void;
} => {
  // TODO: add log to file function
  const logFn = console.log;

  const log = (level: logLevel, componentName: string, message: unknown): void => {
    const time = new Date();
    let color = colors.FgWhite;
    switch (level) {
      case logLevel.Debug:
        color = colors.FgCyan;
        break;
      case logLevel.Info:
        color = colors.FgGreen;
        break;
      case logLevel.Warn:
        color = colors.FgYellow;
        break;
      case logLevel.Error:
        color = colors.FgRed;
        break;
      default:
        color = colors.FgWhite;
        break;
    }
    logFn(`${time.toISOString()} - ${color}[${level}][${componentName}]${message}${colors.Reset}`);
  };

  return {
    raw: (message: unknown): void => {
      if (typeof message === 'object') {
        logFn(JSON.stringify(message));
      } else {
        logFn(message);
      }
    },
    info: (message: unknown): void => log(logLevel.Info, componentName, message),
    error: (message: unknown): void => log(logLevel.Error, componentName, message),
    debug: (message: unknown): void => log(logLevel.Debug, componentName, message),
    warn: (message: unknown): void => log(logLevel.Warn, componentName, message),
  };
};

export default getLogger;
