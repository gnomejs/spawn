import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("mkcert", {
    name: "mkcert",
    envVariable: "UBI_EXE",
    windows: [
        "${LOCALAPPDATA}\\Programs\\bin\\mkcert.exe",
        "${LOCALAPPDATA}\\bin\\mkcert.exe",
        "${UserProfile}\\bin\\mkcert.exe",
        "${UserProfile}\\scoop\\shims\\mkcert.exe",
        "${ALLUSERSPROFILE}\\chocolatey\\bin\\mkcert.exe",
        "${ChocolateyInstall}\\bin\\mkcert.exe",
    ],
    linux: [
        "${HOME}/.local/bin/mkcert",
        "/usr/local/bin/mkcert",
        "/usr/bin/mkcert",
    ],
});

/**
 * Represents an mkcert command.
 */
export class MkcertCommand extends Command {
    /**
     * Represents the mkcert CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("mkcert", args, options);
    }
}

/**
 * Invokes the `mkcert` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the MkcertCommand class.
 * @see {MkcertCommand}
 */
export function mkcert(args?: CommandArgs, options?: CommandOptions): MkcertCommand {
    return new MkcertCommand(args, options);
}
