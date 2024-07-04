import { scoop } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("scoop") !== undefined;

Deno.test({
    name: "scoop: version",
    ignore: !hasExe,
    fn: async () => {
        const result = await scoop("--version");
        equals(result.code, 0);
        ok(result.text().includes("Scoop"));
    },
});
