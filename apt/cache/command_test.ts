import { aptCache } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("apt-cache") !== undefined;

Deno.test({
    name: "apt-cache",
    ignore: !hasExe,
    fn: async () => {
        const result = await aptCache("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("apt"));
    },
});
