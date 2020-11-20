/* eslint-disable no-console */
import { colors } from './consts';
import { circularStringify } from './stringify';
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
export const getLogger = (componentName: string, target = logTarget.console) => {
  const logFn = (message: any) => {
    return target === logTarget.console ? console.log : console.log;
  };

  const log = (level: logLevel, componentName: string, message: any): void => {
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
    console.log(
      `${time.toISOString()} - ${color}[${level}][${componentName}]${message}${colors.Reset}`
    );
  };

  return {
    raw: (message: any): void => {
      if (typeof message === 'object') {
        console.log(circularStringify(message));
      } else {
        console.log(message);
      }
    },
    info: (message: any): void => log(logLevel.Info, componentName, message),
    error: (message: any): void => log(logLevel.Error, componentName, message),
    debug: (message: any): void => log(logLevel.Debug, componentName, message),
    warn: (message: any): void => log(logLevel.Warn, componentName, message),
  };
};

export default getLogger;
