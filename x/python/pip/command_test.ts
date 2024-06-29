import { pathFinder } from "@gnome/exec/path-finder";
import { pip } from "./command.ts";
import { assert as ok } from "@std/assert";

const hasExe = await pathFinder.findExe("pip") !== undefined;

Deno.test("pip", { ignore: !hasExe }, async () => {
    const cmd = pip(["--version"]);
    ok((await cmd.text()).startsWith("pip"));
});
