/**
 * The `pwsh` module provides a simple way to execute
 * PowerShell Core scripts using the `pwsh` shell.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { pwshScript } from "@gnome/pwsh";
 *
 * const cmd = await pwshScript("Write-Host 'Hello, World!'", { stdout: 'piped', stderr: 'piped' });
 * console.log(await cmd.text());
 * console.log(cmd.code);
 *
 * console.log(await pwshScript("Write-Host 'Hello, World!'").text());
 *
 * console.log(await pwshScript("test.ps1").text());
 *
 * // runs powershell command and writes directly to console
 * await pwshScrip("Write-Host 'I am alive'").run();
 *
 * ```
 * @module
 */
export {pwsh, pwshScript} from "./command.ts";
