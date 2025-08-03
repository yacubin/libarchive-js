/*
 * MIT License
 *
 * Copyright (c) 2025  Yurii Yakubin (yurii.yakubin@gmail.com)
 *
 * Permission is granted to use, copy, modify, and distribute this software
 * under the MIT License. See LICENSE file for details.
 */

export default class MakePlugin {
  apply(mk) {
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/malloc"),   "malloc");
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/wcsmbs"),   "musl-multibyte");
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/locale"),   "musl-locale");
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/ctype_l"),  null);
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/wctype"),   null);
    mk.addSubdirectoryAlias(mk.PROJECT_SOURCE_DIR.join("uapi/wctype_l"), null);
  }
};
