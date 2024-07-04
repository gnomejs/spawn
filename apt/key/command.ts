import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt-key", {
    name: "apt-key",
    linux: [
        "/usr/bin/apt-key",
    ],
});

/**
 * Represents a apt command.
 */
export class AptKeyCommand extends Command {
    /**
     * Creates a new instance of the `AptKeyCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt-key", args, options);
    }
}

/**
 * Creates a new instance of the AptKeyCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptKeyCommand class.
 */
export function aptKey(args?: CommandArgs, options?: CommandOptions): AptKeyCommand {
    return new AptKeyCommand(args, options);
}
