import { dpkg } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("dpkg") !== undefined;

Deno.test({
    name: "dpkg",
    ignore: !hasExe,
    fn: async () => {
        const result = await dpkg("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("Debian"));
    },
});
