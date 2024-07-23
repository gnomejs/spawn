import { Command, type CommandArgs, type CommandOptions, pathFinder } from "@gnome/exec";

pathFinder.set("pulumi", {
    name: "pulumi",
    envVariable: "TERRAFORM_EXE",
    windows: [
        "${LOCALAPPDATA}\\bin\\pulumi.exe",
        "${LOCALAPPDATA}\\Programs\\bin\\pulumi.exe",
        "${UserProfile}\\bin\\pulumi.exe",
        "${UserProfile}\\scoop\\shims\\pulumi.exe",
        "${ALLUSERSPROFILE}\\chocolatey\\bin\\pulumi.exe",
        "${ChocolateyInstall}\\bin\\pulumi.exe",
    ],

    linux: [
        "${HOME}/.local/bin/pulumi",
        "${HOME}/bin/pulumi",
        "/usr/bin/pulumi",
        "/usr/local/bin/pulumi",
    ],
});

/**
 * Represents a pulumi command.
 */
export class PulumiCommand extends Command {
    /**
     * Creates a new instance of the `PulumiCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("pulumi", args, options);
    }
}

/**
 * Creates a new instance of the PulumiCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the PulumiCommand class.
 */
export function pulumi(args?: CommandArgs, options?: CommandOptions): PulumiCommand {
    return new PulumiCommand(args, options);
}
