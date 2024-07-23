import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("pip", {
    name: "pip",
    windows: [
        "${SystemDrive}\\Python312\\pip.exe",
        "${SystemDrive}\\Python311\\pip.exe",
        "${SystemDrive}\\Python310\\pip.exe",
        "${SystemDrive}\\Python39\\pip.exe",
        "${SystemDrive}\\Python38\\pip.exe",
        "${ProgramFiles}\\Python312\\pip.exe",
        "${ProgramFiles}\\Python311\\pip.exe",
        "${ProgramFiles}\\Python310\\pip.exe",
        "${ProgramFiles}\\Python39\\pip.exe",
        "${ProgramFiles}\\Python38\\pip.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python312\\pip.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python311\\pip.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python310\\pip.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python39\\pip.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\Python\\Python38\\pip.exe",
    ],
    linux: [
        "/usr/bin/pip3",
        "/usr/bin/pip",
    ],
});

/**
 * Represents a pip command.
 */
export class PipCommand extends Command {
    /**
     * Creates a new instance of the `PipCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("pip", args, options);
    }
}

/**
 * Invokes the `pip` cli.
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the PipCommand class.
 *
 * @example
 *
 * ```ts
 * import { pip } from "@spawn/xv/python/pip";
 *
 * const r = await pip(["install", "requests"]);
 * console.log(r.stdout);
 * console.log(r.text());
 * console.log(r.code);
 * ```
 */
export function pip(args?: CommandArgs, options?: CommandOptions): PipCommand {
    return new PipCommand(args, options);
}
