import { assert as ok } from "@std/assert";
import { az } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("az");

Deno.test("az", { ignore: !hasExe},  async () => {
    const r = await az("-h");
    ok(r.code === 0);
});
