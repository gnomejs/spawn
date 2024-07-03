import { assert as ok } from "@std/assert";
import { unzip } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("unzip");

Deno.test("unzip", { ignore: !hasExe }, async () => {
    const r = await unzip("-h");
    ok(r.code === 0);
});
