import { Command, type CommandArgs, type CommandOptions, ShellCommand, type ShellCommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";
import { isAbsolute, resolve } from "@std/path";
import { makeTempFileSync, writeTextFileSync } from "@gnome/fs";

pathFinder.set("node", {
    name: "node",
    windows: [
        "${ProgramFiles}\\nodejs\\node.exe",
        "${UserProfile}\\.nvs\\default\\node.exe",
    ],
    linux: [
        "/usr/bin/node",
        "${HOME}/.nvs/default/bin/node",
    ],
});

/**
 * File extension for javascript.
 */
export const NODE_EXT = ".js";

/**
 * Represents a Node command.
 */
export class NodeCliCommand extends Command {
    /**
     * Creates a new instance of the `NodeCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("node", args, options);
    }
}

/**
 * Represents a node script or inline file executed using the `node` commandline.
 */
export class NodeShellCommand extends ShellCommand {
    /**
     * Creates a new instance of the `NodeShellCommand` class.
     * @param script The javascript to execute.
     * @param options The options for the node command.
     */
    constructor(script: string, options?: ShellCommandOptions) {
        super("node", script.trimEnd(), options);
    }

    /**
     * Gets the file extension associated with node scripts.
     */
    get ext(): string {
        return NODE_EXT;
    }

    getScriptFile(): { file: string | undefined; generated: boolean } {
        let script = this.script.trimEnd();

        const exts = [".js", ".mjs", ".cjs"];
        if (!script.match(/\n/) && exts.some((ext) => script.endsWith(ext))) {
            script = script.trimStart();
            if (!isAbsolute(script)) {
                script = resolve(script);
            }
            return { file: script, generated: false };
        }

        const ext = exts.find((ext) => script.endsWith(ext)) ?? ".js";

        const file = makeTempFileSync({
            prefix: "script_",
            suffix: ext,
        });

        writeTextFileSync(file, script);

        return { file, generated: false };
    }

    /**
     * Gets the node arguments for executing the javascript.
     * @param script The javascript to execute.
     * @param isFile Specifies whether the script is a file or a command.
     * @returns The node arguments for executing the script.
     */
    // deno-lint-ignore no-unused-vars
    getShellArgs(script: string, isFile: boolean): string[] {
        const params = this.shellArgs ?? [];

        params.push(script);

        return params;
    }
}

/**
 * Executes the node command line using the NodeCliCommand class.
 *
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the NodeCliCommand class.
 *
 * @example
 * ```ts
 * import { nodeCli } from "@gnome/node-cli";
 *
 * const result = await nodeCli("--version");
 * console.log(result.code);
 * console.log(result.text());
 * ```
 *
 * @example
 * ```ts
 * import { nodeCli } from "@gnome/node-cli";
 *
 * /// execute the node command and writes the version to stdout.
 * await nodeCli(["--version"]).run();
 * ```
 */
export function node(args?: CommandArgs, options?: CommandOptions): NodeCliCommand {
    return new NodeCliCommand(args, options);
}

/**
 * Executes a node inline script or script file using the NodeShellCommand class.
 *
 * @param script - The node script to execute.
 * @param options - Optional options for the node shell command.
 * @returns A new instance of the NodeShellCommand class.
 * @example
 * ```ts
 * import { node } from "@spawn/dev/node";
 * 
 * await nodeShell("console.log('Hello World')").run();
 * ```
 * 
 * @example
 * ```ts
 * import { node } from "@spawn/dev/node";
 * 
 * const r = await nodeShell("console.log('Hello World')");
 * console.log(r.code);
 * console.log(r.text());
 * ```
 */
export function nodeScript(script: string, options?: ShellCommandOptions): NodeShellCommand {
    return new NodeShellCommand(script, options);
}