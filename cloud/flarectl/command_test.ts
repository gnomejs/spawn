import { assert as ok } from "@std/assert";
import { flarectl } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("flarectl");

Deno.test("flarectl", { ignore: !hasExe},  async () => {
    const r = await flarectl("-h");
    ok(r.code === 0);
});
