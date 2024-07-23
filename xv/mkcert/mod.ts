/**
 * ## Overview
 *
 * The mkcert module wraps the mkcert cli and provides a simple way to execute
 * mkcert commands.
 *
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usmkcert as the `Command` and `ShellCommand` class.
 *
 * ```typescript
 * import { mkcert } from '@spawn/mkcert'
 *
 * // outputs directly to stdout and stderror streams.
 * await mkcert("-help").run();
 *
 * // pipes the output
 * const result = await mkcert("-help");
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
 * @module
 */
export { mkcert } from "./command.ts";
