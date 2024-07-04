import { choco } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("choco") !== undefined;

Deno.test({
    name: "choco",
    ignore: !hasExe,
    fn: async () => {
        const result = await choco("--version");
        equals(result.code, 0);
        ok(result.text().length > 3);
    },
});
