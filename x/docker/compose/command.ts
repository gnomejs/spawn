import { Command, type CommandArgs, type CommandOptions, splat, type SplatObject } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("docker", {
    name: "docker",
    windows: [
        "${ProgramFiles}\\Docker\\Docker\\resources\\bin\\docker.exe",
    ],
    linux: [
        "/usr/local/bin/docker",
    ],
});

/**
 * Represents the global arguments for the Compose command.
 */
export interface ComposeGlobalArgs extends SplatObject {
    ansi?: "never" | "always" | "auto";
    compatibility?: boolean;
    dryRun?: boolean;
    envFile?: string[];
    file?: string[];
    parallel?: number;
    profile?: string[];
    progress?: "auto" | "plain" | "tty" | "quiet";
    projectDirectory?: string;
    projectName?: string;
    help?: boolean;
}

/**
 * Converts the given `SplatObject` into an array of command-line arguments
 * for the `compose` command.
 *
 * @param args - The `SplatObject` containing the arguments.
 * @returns An array of command-line arguments.
 */
export function splatCompose(args: SplatObject): string[] {
    args.splat ??= {};
    args.splat.prefix = "--";

    const preArgs = [
        "ansi",
        "compatibility",
        "dryRun",
        "envFile",
        "file",
        "parallel",
        "profile",
        "progress",
        "projectDirectory",
        "projectName",
    ];
    const args2: SplatObject = {
        splat: {
            command: ["compose"],
            prefix: "--",
        },
    };
    for (const key of preArgs) {
        if (key in args) {
            args2[key] = args[key];
            delete args[key];
        }
    }

    const params = splat(args2);

    const after = splat(args);
    params.push(...after);

    return params;
}

/**
 * Represents a docker command.
 *
 * When using the SplatObject for CommandArgs, the
 * `prefix` and `assign` properties are set to "-" and "=" respectively.
 */
export class DockerComposeCommand extends Command {
    /**
     * Creates a new instance of the `DockerCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("docker", args, options);

        if (this.args && (typeof this.args !== "string" && !Array.isArray(args))) {
            const args = this.args as SplatObject;
            this.args = splatCompose(args);
        }
    }
}

/**
 * Executes the docker compose command line using the DockerCommand class.
 *
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the DockerCommand class.
 *
 * @example
 * ```typescript
 * import { compose } from "@gnome/docker-cli/compose";
 *
 * await compose("ps --help").run();
 * ```
 */
export function compose(args?: CommandArgs, options?: CommandOptions): DockerComposeCommand {
    return new DockerComposeCommand(args, options);
}
