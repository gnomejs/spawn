import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("choco", {
    name: "choco",
    windows: [
        "${ALLUSERSPROFILE}\\chocolatey\\bin\\choco.exe",
        "${ChocolateyInstall}\\bin\\choco.exe",
    ],
});

/**
 * Represents a choco command.
 */
export class ChocoCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("choco", args, options);
    }
}

/**
 * Creates a new instance of the ChocoCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the ChocoCommand class.
 */
export function choco(args?: CommandArgs, options?: CommandOptions): ChocoCommand {
    return new ChocoCommand(args, options);
}
