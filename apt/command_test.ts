import { apt } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("apt") !== undefined && Deno.build.os === "linux";

Deno.test({
    name: "apt",
    ignore: !hasExe,
    fn: async () => {
        const result = await apt("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("apt"));
    },
});
