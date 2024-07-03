import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("zip", {
    name: "zip",
    envVariable: "ZIP_EXE",
    windows: [
        "${LocalAppData}\\Programs\\bin\\zip.exe",
        "${UserProfile}\\bin\\zip.exe",
        "${UserProfile}\\scoop\\shims\\zip.exe",
        "${ALLUSERSPROFILE}\\chocolatey\\bin\\zip.exe",
        "${ProgramFiles}}\\Info-ZIP\\zip.exe",
        "${ChocolateyInstall}\\bin\\zip.exe",
    ],
    linux: ["/usr/local/bin/zip", "/usr/bin/zip"],
});

/**
 * Represents an zip command.
 */
export class ZipCommand extends Command {
    /**
     * Represents the zip CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("zip", args, options);
    }
}

/**
 * Invokes the `zip` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the ZipCommand class.
 * @see {ZipCommand}
 * @example
 * ```ts
 * import { zip } from "@spawn/common/zip"
 *
 * // Run the zip command and writes to standard streams.
 * await zip({ args: ["-r", "archive.zip", "folder"] }).run()
 * ```
 *
 * @example
 * ```ts
 * import { zip } from "@spawn/common/zip"
 *
 * const r = await zip({ args: ["-r", "archive.zip", "folder"] });
 * console.log(r.code);
 * console.log(r.text());
 * ```
 */
export function zip(args?: CommandArgs, options?: CommandOptions): ZipCommand {
    return new ZipCommand(args, options);
}
