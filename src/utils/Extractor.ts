import { ReadStream } from "fs";
import { Extract } from "unzipper";

/**
 * Extract the contents of a Zip file
 * 
 * @param stream Readable Stream
 * @param path Path to Extract contents of Stream to
 */
const Extractor = (stream: ReadStream, path: string) => {
  return new Promise<void>((resolve) => {
    stream
      .pipe(Extract({ path: path }))
      .on('close', () => {
        resolve();
      });
  });
}

export default Extractor