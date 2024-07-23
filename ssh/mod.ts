/**
 * ## Overview
 *
 * The `ssh` module provides a simple way to execute
 * ssh commands.
 *
 * The module relies upon the [@gnome/exec][exec] module and
 * has the same basic usage as the `Command` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { ssh } from "@spawn/ssh";
 *
 * await ssh(["user@host", "ls"]).run();
 * ```
 *
 * [MIT License](./LICENSE.md)
 *
 * [exec]: https://jsr.io/@gnome/exec/doc
 *
 * @module
 */
export * from "./command.ts";
export * from "./scp/mod.ts";
export * from "./sftp/mod.ts";
export * from "./add/command.ts";
export * from "./agent/command.ts";
export * from "./keygen/command.ts";
export * from "./keyscan/command.ts";
export * from "./sshd/command.ts";
