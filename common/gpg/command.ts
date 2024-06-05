import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec"
import { pathFinder } from "@gnome/exec/path-finder"

pathFinder.set("gpg", {
    name: "gpg",
    envVariable: "GIT_EXE",
    windows: ["${ProgramFiles}\\Git\\usr\\bin\\gpg.exe"],
    linux: ["/usr/bin/gpg"],
});

/**
 * Represents an gpg command.
 */
export class GpgCommand extends Command {
   
    /**
     * Represents the gpg CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("gpg", args, options)
    }
}

/**
 * Invokes the `gpg` cli.
 * 
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the GpgCommand class.
 * @see {GpgCommand}
 * @example
 * ```ts
 * import { gpg } from "@spawn/common/gpg"
 * 
 * const result = await gpg("--version");
 * console.log(result.code);
 * console.log(result.text());
 * ```
 */
export function gpg(args?: CommandArgs, options?: CommandOptions) : GpgCommand {
    return new GpgCommand(args, options)
}