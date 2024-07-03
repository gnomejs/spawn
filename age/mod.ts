/**
 * ## Overview
 *
 * The age module wraps the age cli and provides a simple way to execute
 * age commands.
 *
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ```typescript
 * import { age } from '@spawn/age'
 *
 * // outputs directly to stdout and stderror streams.
 * await age("-h").run();
 *
 * // pipes the output
 * const result = await age("-h");
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
 */
export { age, ageKeygen } from "./command.ts";
