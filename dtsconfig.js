/*
 * MIT License
 *
 * Copyright (c) 2025  Yurii Yakubin (yurii.yakubin@gmail.com)
 *
 * Permission is granted to use, copy, modify, and distribute this software
 * under the MIT License. See LICENSE file for details.
 */

const pkg = require("./package.json");

module.exports = {
  compilationOptions: {
    preferredConfigPath: "./tsconfig.json",
  },
  entries: [
    {
      filePath: "./src/MainLibrary.ts",
      outFile: pkg.types,
      failOnClass: true,
      output: {
        inlineDeclareGlobals: false,
        sortNodes: true,
        noBanner: true,
        umdModuleName: pkg.name,
      }
    },
  ],
};
