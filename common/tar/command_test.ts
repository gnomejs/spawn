import { assert as ok } from "@std/assert";
import { tar } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("tar");

Deno.test("tar", { ignore: !hasExe},  async () => {
    const r = await tar("--help");
    ok(r.code === 0);
});
