/**
 * ## Overview
 * 
 * The scoop module wraps the scoop cli and provides a simple way to execute
 * scoop commands.
 * 
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usscoop as the `Command` and `ShellCommand` class.
 * 
 * ```typescript
 * import { scoop } from '@spawn/scoop'
 * 
 * // outputs directly to stdout and stderror streams.
 * await scoop("-v").run();
 * 
 * // pipes the output
 * const result = await scoop("-v");
 * console.log(result.stdout);
 * console.log(result.text());
 * console.log(result.code);
 * ```
 * 
 * ## License
 * 
 * [MIT](./LICENSE.md)
 * 
 * [exec]: https://jsr.io/@gnome/exec/doc
 * 
 */
export { scoop } from "./command.ts";
