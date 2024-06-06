import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("npx", {
    name: "npx",
    windows: [
        "${ProgramFiles}\\nodejs\\npx.cmd",
        "${LOCALAPPDATA}\\nvs\\default\\npx.cmd",
    ],
    linux: [
        "/usr/bin/npx",
        "${HOME}/.nvs/default/bin/npx",
    ],
});

/**
 * Represents a npx command.
 */
export class NpxCommand extends Command {
    /**
     * Creates a new instance of the `PipCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("npx", args, options);
    }
}

/**
 * Invokes the `npx` cli
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the NpxCommand class.
 * @see {NpxCommand}
 * @example
 * ```ts
 * import { npx } from "@spawn/dev/node/npx"
 * 
 * const r = await npx("cowsay hello");
 * console.log(r.code);
 * console.log(r.text());
 * ```
 */
export function npx(args?: CommandArgs, options?: CommandOptions): NpxCommand {
    return new NpxCommand(args, options);
}
