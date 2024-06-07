import { go } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("go") !== undefined;

Deno.test("go", { ignore: !hasExe, }, async () => {
    const result = await go("version");
    equals(result.code, 0);
    ok(result.text().startsWith("go"))
});
