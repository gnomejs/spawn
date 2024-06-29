/**
 * The `bash` module provides a simple way to execute
 * PowerShell Core scripts using the `bash` shell.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { bashScript } from "@spawn/shells/bash";
 *
 * const cmd = await bashScript("echo 'Hello, World!'", {
 *         stdout: 'piped',
 *         stderr: 'piped'
 *    });
 * console.log(await cmd.text());
 * console.log(cmd.code);
 *
 * console.log(await bashScript("echo 'Hello, World!'").text());
 *
 * console.log(await bashScript("test.sh").text());
 *
 * // runs bash command and writes directly to console
 * await bashScript("echo 'I am alive'").run();
 * ```
 * @module
 */
export { bash, bashScript } from "./command.ts";
