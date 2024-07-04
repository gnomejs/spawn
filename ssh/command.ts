import { Command, type CommandArgs, type CommandOptions, type SplatObject } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("ssh", {
    name: "ssh",
    windows: [
        "${ProgramFiles}\\OpenSSH\\ssh.exe",
        "${SystemRoot}\\System32\\OpenSSH\\ssh.exe",
    ],
    linux: [
        "/usr/bin/ssh",
    ],
});

/**
 * Represents a ssh command.
 *
 * When using the SplatObject for CommandArgs, the
 * `prefix` and `assign` properties are set to "-" and "=" respectively.
 */
export class SshCommand extends Command {
    /**
     * Creates a new instance of the `SshCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("ssh", args, options);

        if (this.args && (typeof this.args !== "string" && !Array.isArray(args))) {
            const args = this.args as SplatObject;
            args.splat ??= {};
            args.splat.prefix = "--";
        }
    }
}

/**
 * Executes the ssh command line using the SshCommand class.
 *
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the SshCommand class.
 *
 * @example
 * ```typescript
 * import { ssh } from "@spawn/xv/ssh";
 *
 * await ssh(["user@host", "ls"]);
 * ```
 */
export function ssh(args?: CommandArgs, options?: CommandOptions): SshCommand {
    return new SshCommand(args, options);
}
