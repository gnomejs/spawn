import { pnpm } from "./command.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";
import { runTest } from "../_test_utils.ts";

const hasExe = pathFinder.findExeSync("pnpm") !== undefined;

Deno.test("pnpm", { ignore: !hasExe }, async () => {
    await runTest(import.meta.url, "pnpm1", async (dir) => {
        const r = await pnpm("run build", { cwd: dir });
        console.log(r.text());
        equals(r.code, 0, "exit code must be zero");
        ok(r.text().includes("build"), "text must include 'build'");
    });
});
