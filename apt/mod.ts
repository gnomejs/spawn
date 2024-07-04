/**
 * ## Overview
 * 
 * The `apt` module provides a simple way to execute
 * apt commands.
 * 
 * The module includes apt-get, apt-cache, apt-mark, apt-key,
 * apt-add-repository, dpkg.
 * 
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic ussops as the `Command` and `ShellCommand` class.
 * 
 * ## Basic Usage
 * 
 * ```typescript
 * import { apt } from "@spawn/apt";
 *  
 * const result = await apt("--version");
 * console.log(result.code);
 * console.log(result.text());
 * 
 * ```
 * 
 * [MIT License](./LICENSE.md)
 * 
 * [exec]: https://jsr.io/@gnome/exec/doc
 * 
 */
export { apt } from "./command.ts";
export * from "./get/mod.ts";
export * from "./cache/mod.ts";
export * from "./dpkg/mod.ts";
export * from "./add-repository/mod.ts";
export * from "./key/mod.ts";
export * from "./mark/mod.ts";
