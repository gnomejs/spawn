import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("age", {
    name: "age",
    envVariable: "AGE_EXE",
    windows: ["${ChocolateyInstall}\\bin\\age.exe"],
    linux: ["/usr/local/bin/age", "/usr/bin/age"],
});

pathFinder.set("age-keygen", {
    name: "age-keygen",
    envVariable: "AGE_KEYGEN_EXE",
    windows: ["${ChocolateyInstall}\\bin\\age-keygen.exe"],
    linux: ["/usr/local/bin/age-keygen", "/usr/bin/age-keygen"],
});

/**
 * Represents an age command.
 */
export class AgeCommand extends Command {
    /**
     * Represents the age CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("age", args, options);
    }
}

/**
 * Represents an age-keygen command.
 */
export class AgeKeygenCommand extends Command {
    /**
     * Represents the age-keygen CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("age-keygen", args, options);
    }
}

/**
 * Invokes the `age` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the AgeCommand class.
 * @see {AgeCommand}
 */
export function age(args?: CommandArgs, options?: CommandOptions): AgeCommand {
    return new AgeCommand(args, options);
}

/**
 * Invokes the `age-keygen` cli.
 *
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the AgeKeygenCommand class.
 * @see {AgeKeygenCommand}
 */
export function ageKeygen(args?: CommandArgs, options?: CommandOptions): AgeKeygenCommand {
    return new AgeKeygenCommand(args, options);
}
