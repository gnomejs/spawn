import { Command, type CommandArgs, type CommandOptions, type SplatObject } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("vault", {
    name: "vault",
    envVariable: "VAULT_EXE",
    windows: [
        "${USERPROFILE}\\AppData\\Local\\Programs\\bin\\vault.exe",
        "${USERPROFILE}\\AppData\\Local\\Programs\\vault\\vault.exe",
        "${USERPROFILE}\\scoop\\shims\\vault.exe",
        "${ALLUSERSPRORFILE}\\chocolatey\\bin\\vault.exe",
        "${ChocolateyInstall}\\bin\\vault.exe",
    ],
    linux: [
        "/usr/local/bin/vault",
        "/usr/bin/vault",
    ],
});

/**
 * Represents a Vault command.
 *
 * When using the SplatObject for CommandArgs, the
 * `prefix` and `assign` properties are set to "-" and "=" respectively.
 */
export class VaultCommand extends Command {
    /**
     * Creates a new instance of the `VaultCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("vault", args, options);

        if (this.args && (typeof this.args !== "string" && !Array.isArray(args))) {
            const args = this.args as SplatObject;
            args.splat ??= {};
            args.splat.prefix = "-";
            args.splat.assign = "=";
        }
    }
}

/**
 * Executes the Vault command line using the VaultCommand class.
 *
 * @param args The command arguments.
 * @param options The command options.
 * @returns a new instance of the VaultCommand class.
 *
 * @example
 * ```typescript
 * import { vault } from "@gnome/vault-cli";
 *
 * // runs the vault login command
 * await vault({ splat: { command: "login" }, tokenOnly: true } }).run();
 *
 * const result = await vault({ splat: { command: "login" }, tokenOnly: true });
 * console.log(result.code);
 * console.log(result.text());
 *
 * const result await value(["login", "-token-only"]);
 * console.log(result.code);
 * console.log(result.text());
 * ```
 */
export function vault(args?: CommandArgs, options?: CommandOptions): VaultCommand {
    return new VaultCommand(args, options);
}
