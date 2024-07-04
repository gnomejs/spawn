import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("winget", {
    name: "winget",
    windows: [
        "${LOCALAPPDATA}\\Microsoft\\WindowsApps\\winget.exe",
    ],
});

/**
 * Represents a winget command.
 */
export class WinGetCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("winget", args, options);
    }
}

/**
 * Creates a new instance of the WinGetCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the WinGetCommand class.
 */
export function winget(args?: CommandArgs, options?: CommandOptions): WinGetCommand {
    return new WinGetCommand(args, options);
}
