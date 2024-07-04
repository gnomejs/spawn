import { consul } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("consul") !== undefined;

Deno.test({
    name: "consul: version",
    ignore: !hasExe,
    fn: async () => {
        const result = await consul("--version");
        equals(result.code, 0);
        ok(result.text().length > 3);
    },
});
