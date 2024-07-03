import { assert as ok } from "@std/assert";
import { git } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("git");

Deno.test("git", { ignore: !hasExe }, async () => {
    const r = await git("--version");
    ok(r.code === 0);
    ok(r.text().startsWith("git"));
});
