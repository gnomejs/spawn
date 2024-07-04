import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("dpkg", {
    name: "dpkg",
    linux: [
        "/usr/bin/dpkg",
    ],
});

/**
 * Represents a apt command.
 */
export class DpkgCommand extends Command {
    /**
     * Creates a new instance of the `DpkgCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("dpkg", args, options);
    }
}

/**
 * Creates a new instance of the DpkgCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the DpkgCommand class.
 */
export function dpkg(args?: CommandArgs, options?: CommandOptions): DpkgCommand {
    return new DpkgCommand(args, options);
}
