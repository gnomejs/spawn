import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { Command as CommandBase } from "@gnome/exec/command-base";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("sudo", {
    name: "sudo",
    windows: [
        "${SystemRoot}\\System32\\sudo.exe",
    ],
    linux: [
        "/usr/bin/sudo",
    ],
});

function convertCommand(args?: CommandArgs | CommandBase): CommandArgs | undefined {
    if (args === undefined) {
        return undefined;
    }

    if (args instanceof CommandBase) {
        return args.toArgs();
    }

    return args as CommandArgs;
}

/**
 * Represents a sudo command.
 */
export class SudoCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs | CommandBase, options?: CommandOptions) {
        super("sudo", convertCommand(args), options);
    }
}

/**
 * Invokes the `sudo` cli.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the SudoCommand class.
 * @see {SudoCommand}
 * @example
 * ```ts
 * import { sudo } from "@spawn/common/sudo"
 *
 * const result = await sudo("ls");
 * console.log(result.code);
 * console.log(result.text());
 * ```
 */
export function sudo(args?: CommandArgs | CommandBase, options?: CommandOptions): SudoCommand {
    return new SudoCommand(args, options);
}
