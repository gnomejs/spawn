import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("tar", {
    name: "tar",
    envVariable: "TAR_EXE",
    windows: ["${SystemRoot}\\System32\\tar.exe"],
    linux: ["/usr/bin/tar", "/usr/local/bin/tar"],
});

/**
 * Represents an tar command.
 */
export class TarCommand extends Command {
    /**
     * Represents the tar CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("tar", args, options);
    }
}

/**
 * Invokes the `tar` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the TarCommand class.
 * @see {TarCommand}
 * @example
 * ```ts
 * import { tar } from "@spawn/common/tar"
 *
 * // Run the tar command and writes to standard streams.
 * await tar("--help").run()
 * ```
 *
 * @example
 * ```ts
 * import { tar } from "@spawn/xv/tar"
 *
 * const r = await tar("--help");
 * console.log(r.code);
 * console.log(r.text());
 * ```
 */
export function tar(args?: CommandArgs, options?: CommandOptions): TarCommand {
    return new TarCommand(args, options);
}
