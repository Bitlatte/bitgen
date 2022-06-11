import { createReadStream, rename } from "fs";
import { join } from "path";
import Extractor from "./Extractor";
import fetch from "./fetch";
import cleanup from "./cleanup";
import chalk from "chalk";

const create = (url: string, path: string, type: string) => {
  return new Promise<void>((resolve, reject) => {
    fetch(url)
      .then((uuid) => {
        const stream = createReadStream(join(process.cwd(), `${uuid}.zip`));
        Extractor(stream, process.cwd()).then(() => {
          rename(
            type !== "api"
              ? `${process.cwd()}/vite-${type}-main`
              : `${process.cwd()}/REST-boilerplate-main`,
            path,
            (err) => {
              if (err) reject(err);
              cleanup(uuid)
                .then(() => {
                  console.log("\n");
                  console.log(chalk.yellow(`Project Created: ${path}`));
                  console.log("\n");
                  console.log("      To continue:");
                  console.log("\n");
                  console.log(`      cd ${path}`);
                  console.log("      npm install");
                  console.log("      npm run dev");
                })
                .catch((err) => reject(err));
            },
          );
        });
      })
      .catch((e) => reject(e));
  });
};

export default create;
