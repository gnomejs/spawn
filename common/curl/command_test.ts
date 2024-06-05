import { assert as ok } from "@std/assert";
import { curl } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("curl");

Deno.test("curl", { ignore: !hasExe},  async () => {
    const r = await curl("-h");
    ok(r.code === 0);
});
