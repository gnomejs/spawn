/**
 * The `cmd` module provides a simple way to execute
 * cmd scripts using the `cmd` shell.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { cmd } from "@gnome/cmd-cli";
 *
 * const cmd2 = await cmd("echo 'Hello, World!'", {
 *         stdout: 'piped',
 *         stderr: 'piped'
 *    });
 * console.log(await cmd2.text());
 * console.log(cmd2.code);
 *
 * console.log(await cmd("echo 'Hello, World!'").text());
 *
 * console.log(await cmd("test.sh").text());
 *
 * // runs cmd command and writes directly to console
 * await cmd("echo 'I am alive'").run();
```
 * @module
 */
export { cmdScript, cmd } from "./command.ts";
