import { assert as ok } from "@std/assert";
import { az } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";
import { WINDOWS } from "@gnome/os-constants";

// ignore on windows as it takes too long to run
const hasExe = await pathFinder.findExe("az");

Deno.test("az", { ignore: !hasExe || WINDOWS }, async () => {
    const r = await az("-h");
    ok(r.code === 0);
});
