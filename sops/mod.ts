/**
 * ## Overview
 *
 * The sops module wraps the sops cli and provides a simple way to execute
 * sops commands.
 *
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic ussops as the `Command` and `ShellCommand` class.
 *
 * ```typescript
 * import { sops } from '@spawn/sops'
 *
 * // outputs directly to stdout and stderror streams.
 * await sops("-h").run();
 *
 * // pipes the output
 * const result = await sops("-h");
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
export { sops } from "./command.ts";
