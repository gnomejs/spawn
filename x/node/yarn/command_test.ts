import { yarn } from "./command.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";
import { runTest } from "../_test_utils.ts";

const hasExe = pathFinder.findExeSync("yarn") !== undefined;

Deno.test("yarn", { ignore: !hasExe }, async () => {
    await runTest(import.meta.url, "yarn1", async (dir) => {
        const r = await yarn("run build", { cwd: dir });
        equals(r.code, 0, "exit code must be zero");
        ok(r.text().includes("build"), "text must include 'build'");
    });
});
