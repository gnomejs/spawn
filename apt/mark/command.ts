import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt-mark", {
    name: "apt-mark",
    linux: [
        "/usr/bin/apt-mark",
    ],
});

/**
 * Represents a apt command.
 */
export class AptMarkCommand extends Command {
    /**
     * Creates a new instance of the `AptMarkCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt-mark", args, options);
    }
}

/**
 * Creates a new instance of the AptMarkCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptMarkCommand class.
 */
export function aptMark(args?: CommandArgs, options?: CommandOptions): AptMarkCommand {
    return new AptMarkCommand(args, options);
}
