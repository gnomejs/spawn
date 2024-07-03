/**
 * The `docker-cli` module provides a simple way to execute
 * docker commands.
 *
 * The module relies upon the @gnome/exec module and
 * has the same basic usage as the `Command` class.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { docker } from "@gnome/docker-cli";
 *
 * const result = await docker(["ps"]);
 * console.log(result.code);
 * console.log(result.text());
 * ```
 * @module
 */
export * from "./command.ts";
