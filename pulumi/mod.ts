/**
 * ## Overview
 *
 * The `pulumi` module provides a simple way to execute
 * pulumi commands.
 *
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { pulumi } from "@spawn/pulumi";
 *
 * const result = pulumi("version");
 * console.log(result.code);
 * console.log(result.text());
 *
 * ```
 *
 * [MIT License](./LICENSE.md)
 *
 * [exec]: https://jsr.io/@gnome/exec/doc
 *
 * @module
 */
export { pulumi } from "./command.ts";
