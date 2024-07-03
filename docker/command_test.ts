import { docker } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("docker") !== undefined;

Deno.test("docker", { ignore: !hasExe }, async () => {
    const result = await docker({ help: true });
    equals(result.code, 0);
    ok(result.text().trim().startsWith("Usage"));
});
