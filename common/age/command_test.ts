import { assert as ok } from "@std/assert";
import { age } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("age");

Deno.test("age", { ignore: !hasExe},  async () => {
    const r = await age("-h");
    ok(r.code === 0);
});
