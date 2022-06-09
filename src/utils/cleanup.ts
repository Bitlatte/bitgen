import { rm } from "fs"
import { join } from "path"
import { cwd } from "process"

/**
 * Deletes the zip file from disk
 * 
 * @param uuid UUID of the zip file
 */
const cleanup = (uuid: string) => {
  return new Promise<void>((resolve, reject) => {
    rm(join(cwd(), `${uuid}.zip`), (err) => {
      if (err) reject(err);
      resolve();
    });
  })
}

export default cleanup;