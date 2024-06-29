import { Command, type CommandArgs, type CommandOptions, type SplatObject } from "@gnome/exec";
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
 * Represents a docker command.
 *
 * When using the SplatObject for CommandArgs, the
 * `prefix` and `assign` properties are set to "-" and "=" respectively.
 */
export class DockerCommand extends Command {
    /**
     * Creates a new instance of the `DockerCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("docker", args, options);

        if (this.args && (typeof this.args !== "string" && !Array.isArray(args))) {
            const args = this.args as SplatObject;
            args.splat ??= {};
            args.splat.prefix = "--";
        }
    }
}

export interface Compose extends SplatObject {
    file?: string;
    project?: string;
}

/**
 * Executes the docker command line using the DockerCommand class.
 *
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the DockerCommand class.
 *
 * @example
 * ```typescript
 * import { docker } from "@gnome/docker-cli";
 *
 * await docker("ps").run();
 * ```
 */
export function docker(args?: CommandArgs, options?: CommandOptions): DockerCommand {
    return new DockerCommand(args, options);
}
