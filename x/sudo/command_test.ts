import { sudo } from "./command.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { cmd } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("sudo") !== undefined;

Deno.test({
    name: "sudo",
    ignore: !hasExe,
    fn: async () => {
        const result = await sudo("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("Sudo"));
        const result2 = await sudo(cmd("ls"));
        console.log(result2.text());
        equals(result2.code, 0);
    },
});
