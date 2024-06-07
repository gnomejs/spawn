import { pathFinder } from "@gnome/exec/path-finder";
import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";

pathFinder.set("poetry", {
    name: "poetry",
    windows: [
        "${SystemDrive}\\Python312\\Scripts\\poetry.exe",
        "${SystemDrive}\\Python311\\Scripts\\poetry.exe",
        "${SystemDrive}\\Python310\\Scripts\\poetry.exe",
        "${SystemDrive}\\Python39\\Scripts\\poetry.exe",
        "${SystemDrive}\\Python38\\Scripts\\poetry.exe",
        "${ProgramFiles}\\Python312\\Scripts\\poetry.exe",
        "${ProgramFiles}\\Python311\\Scripts\\poetry.exe",
        "${ProgramFiles}\\Python310\\Scripts\\poetry.exe",
        "${ProgramFiles}\\Python39\\Scripts\\poetry.exe",
        "${ProgramFiles}\\Python38\\Scripts\\poetry.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python312\\Scripts\\poetry.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python311\\Scripts\\poetry.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\\poetry.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\poetry.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python38\\Scripts\\poetry.exe",
    ],
    linux: [
        "/usr/bin/poetry",
    ],
});

/**
 * Represents a command for executing poetry-related operations.
 */
export class PoetryCommand extends Command {
    /**
     * Creates a new instance of the `PoetryCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("poetry", args, options);
    }
}

/**
 * Invokes the `poetry` cli.
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the PoetryCommand class.
 * @example
 * ```ts
 * import { poetry } from "@spawn/dev/python/poetry";
 * 
 * const r = await poetry(["install", "requests"]);
 * console.log(r.stdout);
 * console.log(r.text());
 * console.log(r.code);
 * ```
 */
export function poetry(args?: CommandArgs, options?: CommandOptions): PoetryCommand {
    return new PoetryCommand(args, options);
}
