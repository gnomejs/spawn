import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("unzip", {
    name: "unzip",
    envVariable: "UNZIP_EXE",
    windows: [
        "${LocalAppData}\\Programs\\bin\\unzip.exe",
        "${UserProfile}\\bin\\unzip.exe",
        "${UserProfile}\\scoop\\shims\\unzip.exe",
        "${ALLUSERSPROFILE}\\chocolatey\\bin\\unzip.exe",
        "${ProgramFiles}}\\Info-ZIP\\unzip.exe",
        "${ChocolateyInstall}\\bin\\unzip.exe",
    ],
    linux: ["/usr/local/bin/unzip", "/usr/bin/unzip"],
});

/**
 * Represents an unzip command.
 */
export class UnzipCommand extends Command {
    /**
     * Represents the unzip CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("unzip", args, options);
    }
}

/**
 * Invokes the `unzip` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the UnzipCommand class.
 * @see {UnzipCommand}
 * @example
 * ```ts
 * import { unzip } from "@spawn/xv/unzip"
 *
 * // Run the unzip command and writes to standard streams.
 * await unzip({ args: ["-r", "archive.unzip", "folder"] }).run()
 * ```
 *
 * @example
 * ```ts
 * import { unzip } from "@spawn/xv/unzip"
 *
 * const r = await unzip({ args: ["-r", "archive.unzip", "folder"] });
 * console.log(r.code);
 * console.log(r.text());
 * ```
 */
export function unzip(args?: CommandArgs, options?: CommandOptions): UnzipCommand {
    return new UnzipCommand(args, options);
}
