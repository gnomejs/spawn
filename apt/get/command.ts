import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt-get", {
    name: "apt-get",
    linux: [
        "/usr/bin/apt-get",
    ],
});

/**
 * Represents a apt command.
 */
export class AptGetCommand extends Command {
    /**
     * Creates a new instance of the `AptGetCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt-get", args, options);
    }
}

/**
 * Creates a new instance of the AptGetCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptGetCommand class.
 */
export function aptGet(args?: CommandArgs, options?: CommandOptions): AptGetCommand {
    return new AptGetCommand(args, options);
}
