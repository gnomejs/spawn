import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt", {
    name: "apt",
    linux: [
        "/usr/bin/apt",
    ],
});

/**
 * Represents a apt command.
 */
export class AptCommand extends Command {
    /**
     * Creates a new instance of the `aptCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt", args, options);
    }
}

/**
 * Creates a new instance of the AptCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptCommand class.
 */
export function apt(args?: CommandArgs, options?: CommandOptions): AptCommand {
    return new AptCommand(args, options);
}
