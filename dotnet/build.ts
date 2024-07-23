import { type CommandOptions, splat } from "@gnome/exec";
import { DotNetCommand, type DotNetGlobalArgs } from "./command.ts";

/**
 * Represents the arguments for the DotNet build command.
 */
export interface DotNetBuildArgs extends DotNetGlobalArgs {
    /**
     * The path to the project file to build.
     */
    project?: string;

    /**
     * The configuration to build (e.g., "Debug", "Release").
     */
    configuration?: string;

    /**
     * Debug the build output.
     */
    debug?: boolean;

    /**
     * The target framework to build for.
     */
    framework?: string;

    /**
     * The target runtime to build for.
     */
    runtime?: string;

    /**
     * Indicates whether to skip restoring dependencies.
     */
    noDependencies?: boolean;

    /**
     * Indicates whether to suppress the display of the logo banner.
     */
    nologo?: boolean;

    /**
     * Indicates whether to disable incremental build.
     */
    noIncremental?: boolean;

    /**
     * Publish your application as a framework-dependent application.
     * A compatible .NET Core Runtime must be installed on the target machine.
     */
    noSelfContained?: boolean;

    /**
     * Indicates whether to skip restoring the project's dependencies.
     */
    noRestore?: boolean;

    /**
     * The output directory for the build artifacts.
     */
    output?: string;

    /**
     * The verbosity level of the build output.
     * Possible values: "quiet", "minimal", "normal", "detailed", "diagnostic".
     */
    verbosity?: "quiet" | "minimal" | "normal" | "detailed" | "diagnostic";

    /**
     * The version suffix to append to the assembly version.
     */
    versionSuffix?: string;

    /**
     * Indicates whether to create a self-contained deployment.
     */
    selfContained?: boolean;

    /**
     * The target architecture to build for.
     */
    arch?: string;

    /**
     * The target operating system to build for.
     */
    os?: string;

    /**
     * Indicates whether to disable build servers.
     */
    disableBuildServers?: boolean;

    /**
     * The path to the directory where build artifacts are placed.
     */
    artifactsPath?: string;

    /**
     * Indicates whether to use the current runtime to build.
     */
    useCurrentRuntime?: boolean;
}

/**
 * Builds the project using the dotnet CLI with optional arguments.
 * If no arguments are provided, it builds the current directory.
 *
 * @param args - Optional arguments for the dotnet build command.
 * @returns An array of strings representing the command and arguments to be executed.
 */
export function splatBuild(args?: DotNetBuildArgs): string[] {
    if (!args) {
        return ["build", "."];
    }

    args.project ??= ".";
    args.splat = {
        command: ["build"],
        arguments: ["project"],
        prefix: "--",
    };

    return splat(args);
}

/**
 * Builds the project using dotnet build command.
 * @param args - Optional arguments for the dotnet build command.
 * @param options - Optional options for the dotnet build command.
 * @returns A `DotNetCommand` instance representing the dotnet build command.
 * @example
 * ```ts
 * import { build } from "@spawn/dotnet/build";
 *
 * // Build the project in the current directory.
 * await build().run();
 *
 * // Build the project in the specified directory.
 * await build({ project: "path/to/project", noRestore: true, nologo: true }).run();
 * ```
 */
export function build(args?: DotNetBuildArgs, options?: CommandOptions): DotNetCommand {
    return new DotNetCommand(splatBuild(args), options);
}
