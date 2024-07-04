import { ubi } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("ubi") !== undefined;

Deno.test({
    name: "ubi",
    ignore: !hasExe,
    fn: async () => {
        const result = await ubi("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("ubi"));
    },
});
