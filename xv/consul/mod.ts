/**
 * ## Overview
 * 
 * The consul module wraps the consul cli and provides a simple way to execute
 * consul commands.
 * 
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usconsul as the `Command` and `ShellCommand` class.
 * 
 * ```typescript
 * import { consul } from '@spawn/consul'
 * 
 * // outputs directly to stdout and stderror streams.
 * await consul("-h").run();
 * 
 * // pipes the output
 * const result = await consul("-h");
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
export { consul } from "./command.ts";
