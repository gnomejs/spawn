import { dotnet } from "./command.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("dotnet") !== undefined;

Deno.test("dotnet", { ignore: !hasExe, }, async () => {
    const result = await dotnet("--version");
    equals(result.code, 0);
    ok(result.text().length > 3);
});
