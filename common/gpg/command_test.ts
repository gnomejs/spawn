import { assert as ok } from "@std/assert";
import { gpg } from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("gpg");

Deno.test("gpg", { ignore: !hasExe},  async () => {
    const r = await gpg("--version");
    ok(r.code === 0);
    ok(r.text().startsWith("gpg"));
});
