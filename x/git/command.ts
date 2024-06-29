import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("git", {
    name: "git",
    envVariable: "GIT_EXE",
    windows: ["${ProgramFiles}\\Git\\cmd\\git.exe"],
    linux: ["/usr/bin/git"],
});

/**
 * Represents an git command.
 */
export class GitCommand extends Command {
    /**
     * Represents the git CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("git", args, options);
    }
}

/**
 * Invokes the `git` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the GitCommand class.
 * @see {GitCommand}
 * @example
 * ```ts
 * import { git } from "@spawn/common/git"
 *
 * const result = await git("status");
 * console.log(result.code);
 * console.log(result.text());
 * ```
 */
export function git(args?: CommandArgs, options?: CommandOptions): GitCommand {
    return new GitCommand(args, options);
}
