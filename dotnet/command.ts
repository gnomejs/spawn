import { Command, type CommandArgs, type CommandOptions, pathFinder, type SplatObject } from "@gnome/exec";

pathFinder.set("dotnet", {
    name: "dotnet",
    windows: [
        "${ProgramFiles}\\dotnet\\dotnet.exe",
    ],
    linux: [
        "/usr/bin/dotnet",
        "${HOME}/.dotnet/dotnet",
    ],
});

export interface DotNetGlobalArgs extends SplatObject {
    help?: boolean;
}

/**
 * Represents a dotnet command.
 */
export class DotNetCommand extends Command {
    /**
     * Creates a new instance of the `DotNetCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("dotnet", args, options);
    }
}

/**
 * Creates a new instance of the DotNetCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the DotNetCommand class.
 */
export function dotnet(args?: CommandArgs, options?: CommandOptions): DotNetCommand {
    return new DotNetCommand(args, options);
}
