#! /usr/bin/env node
"use strict";

import { program } from "commander";
import { join, isAbsolute } from "path";
import { name, version, description } from "../package.json";
import create from "./utils/create";

interface ProgramOptions {
  react?: boolean;
  svelte?: boolean;
  vue?: boolean;
  api?: boolean;
}

program.name(name).version(version).description(description);

program
  .option("-r, --react", "create a new react app")
  .option("-s, --svelte", "create a new svelte app")
  .option("-v, --vue", "create a new vue app")
  .option("-a, --api", "react a new restful api")
  .argument("<path>", "where to create the new project")
  .action((path: string, options: ProgramOptions) => {
    let url: string;
    const outDir: string = isAbsolute(path) ? path : join(process.cwd(), path);
    if (options.react) {
      url = "https://codeload.github.com/Bitlatte/vite-react/zip/main";
      create(url, outDir, "react");
    }
    if (options.svelte) {
      url = "https://codeload.github.com/Bitlatte/vite-svelte/zip/main";
      create(url, outDir, "svelte");
    }
    if (options.vue) {
      url = "https://codeload.github.com/Bitlatte/vite-vue/zip/main";
      create(url, outDir, "vue");
    }
    if (options.api) {
      url = "https://codeload.github.com/Bitlatte/REST-boilerplate/zip/main";
      create(url, outDir, "api");
    }
  });

program.parse();
