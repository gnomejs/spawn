/**
 * The `powershell` module provides a simple way to execute
 * PowerShell Core scripts using the `powershell` shell.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` and `ShellCommand` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { powershell } from "@gnome/powershell";
 *
 * const cmd = await powershell("Write-Host 'Hello, World!'", { stdout: 'piped', stderr: 'piped' });
 * console.log(await cmd.text());
 * console.log(cmd.code);
 *
 * console.log(await powershell("Write-Host 'Hello, World!'").text());
 *
 * console.log(await powershell("test.ps1").text());
 *
 * // runs powershell command and writes directly to console
 * await powershell("Write-Host 'I am alive'").run();
 *
 * ```
 * @module
 */
export { powershell, powershellScript } from "./command.ts";
