import { assert as ok } from "@std/assert";
import { aws } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("aws");

Deno.test("aws", { ignore: !hasExe},  async () => {
    const r = await aws("help");
    ok(r.code === 0);
});
