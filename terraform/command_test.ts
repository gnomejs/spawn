import { terraform } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("terraform") !== undefined;

Deno.test({
    name: "terraform",
    ignore: !hasExe,
    fn: async () => {
        const result = await terraform("--version");
        equals(result.code, 0);
        ok(result.text().startsWith("Terraform"));
    },
});
