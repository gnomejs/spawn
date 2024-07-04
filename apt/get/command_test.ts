import { aptGet } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("apt-get") !== undefined;

Deno.test({
    name: "apt-get",
    ignore: !hasExe,
    fn: async () => {
        const result = await aptGet("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("apt"));
    },
});
