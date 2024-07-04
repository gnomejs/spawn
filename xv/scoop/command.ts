import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("scoop", {
    name: "scoop",
    envVariable: "UBI_EXE",
    windows: [
        "${UserProfile}\\scoop\\shims\\scoop.cmd",
    ],
});

/**
 * Represents an scoop command.
 */
export class ScoopCommand extends Command {
    /**
     * Represents the scoop CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("scoop", args, options);
    }
}

/**
 * Invokes the `scoop` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the ScoopCommand class.
 * @see {ScoopCommand}
 */
export function scoop(args?: CommandArgs, options?: CommandOptions): ScoopCommand {
    return new ScoopCommand(args, options);
}
