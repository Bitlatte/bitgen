import { get } from 'https';
import { createWriteStream } from 'fs';
import { randomUUID } from 'crypto';

/**
 * Download a zip file and save it to disk for
 * extraction
 * 
 * @param url Url to the zip file to fetch
 * @returns UUID assigned to the zip file
 */
const fetch = (url: string) => {
  return new Promise<string>((resolve, reject) => {
    const id = randomUUID();
    const stream = createWriteStream(`${id}.zip`);
    get(url, (res) => {
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close(() => resolve(id));
      }).on('error', (err) => reject(err))
    }).on('error', (err) => reject(err))
  })
}

export default fetch;