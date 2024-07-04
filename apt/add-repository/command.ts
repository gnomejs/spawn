import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("apt-add-repository", {
    name: "apt-add-repository",
    linux: [
        "/usr/bin/apt-add-repository",
    ],
});

/**
 * Represents a apt command.
 */
export class AptAddRepositoryCommand extends Command {
    /**
     * Creates a new instance of the `AptAddRepositoryCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("apt-add-repository", args, options);
    }
}

/**
 * Creates a new instance of the AptAddRepositoryCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the AptAddRepositoryCommand class.
 */
export function aptAddRepository(args: CommandArgs, options?: CommandOptions): AptAddRepositoryCommand {
    return new AptAddRepositoryCommand(args, options);
}
