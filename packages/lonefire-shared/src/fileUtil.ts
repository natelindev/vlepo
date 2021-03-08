import debugInit from 'debug';
import { promises as fsPromises } from 'fs';
import { join } from 'path';

const debug = debugInit('lonefire:shared');
const { readdir, stat } = fsPromises;

export const enum fileOptions {
  files = 1,
  dirs = 2,
  all = 3,
}

/**
 * listDir
 * @param path the path of directory
 * @param option oneof the fileOptions
 * @returns list of filenames in target directory
 */
export const listDir = async (path: string, option = fileOptions.all): Promise<string[]> => {
  try {
    const files = await readdir(path);
    const dirs = await Promise.all(
      files
        .filter(async (file) => {
          const result = await stat(join(path, file));
          switch (option) {
            case fileOptions.dirs:
              return result.isDirectory();
            case fileOptions.files:
              return !result.isDirectory();
            case fileOptions.all:
            default:
              return true;
          }
        })
        .map((file) => JSON.stringify(file).replace(/"/gm, '')),
    );

    return dirs;
  } catch (err) {
    debug(err);
    return [];
  }
};
