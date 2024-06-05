import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec"
import { pathFinder } from "@gnome/exec/path-finder"

pathFinder.set("doctl", {
    name: "doctl",
    envVariable: "DOCTL_EXE",
    windows: ["${ProgramFiles}\\doctl\\doctl.exe"],
    linux: ["/usr/local/bin/doctl", "/usr/bin/doctl"],
});


/**
 * Represents an doctl command.
 */
export class DoCtlCommand extends Command {
   
    /**
     * Represents the doctl CLI command.
     * @param args - The command arguments.
     * @param options - The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("doctl", args, options)
    }
}


/**
 * Invokes the `doctl` cli
 * 
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns A new instance of the DoCtlCommand class.
 * @see {DoCtlCommand}
 */
export function doctl(args?: CommandArgs, options?: CommandOptions) : DoCtlCommand {
    return new DoCtlCommand(args, options)
}