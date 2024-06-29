import { assert as ok } from "@std/assert";
import { zip } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("zip");

Deno.test("zip", { ignore: !hasExe }, async () => {
    const r = await zip("-h");
    ok(r.code === 0);
});
