import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt-cache", {
    name: "apt-cache",
    linux: [
        "/usr/bin/apt-cache",
    ],
});

/**
 * Represents a apt command.
 */
export class AptCacheCommand extends Command {
    /**
     * Creates a new instance of the `AptCacheCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt-cache", args, options);
    }
}

/**
 * Creates a new instance of the AptCacheCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptCacheCommand class.
 */
export function aptCache(args: CommandArgs, options?: CommandOptions): AptCacheCommand {
    return new AptCacheCommand(args, options);
}
