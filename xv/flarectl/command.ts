import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("flarectl", {
    name: "fkarectl",
    envVariable: "FLARECTL_EXE",
    windows: ["${ProgramFiles}\\flarectl\\flarectl.exe"],
    linux: ["/usr/local/bin/flarectl", "/usr/bin/flarectl"],
});

/**
 * Represents an flarectl command.
 */
export class FlareCtlCommand extends Command {
    /**
     * Represents the flarectl CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("flarectl", args, options);
    }
}

/**
 * Invokes the `flarectl` cli
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the FlareCtlCommand class.
 * @see {FlareCtlCommand}
 */
export function flarectl(args?: CommandArgs, options?: CommandOptions): FlareCtlCommand {
    return new FlareCtlCommand(args, options);
}
