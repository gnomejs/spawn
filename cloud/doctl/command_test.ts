import { assert as ok } from "@std/assert";
import { doctl } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("doctl");

Deno.test("doctl", { ignore: !hasExe},  async () => {
    const r = await doctl("-h");
    ok(r.code === 0);
});
