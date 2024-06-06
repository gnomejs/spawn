import { npm } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { runTest } from "../_test_utils.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("npm") !== undefined;

Deno.test("npm",{ ignore: !hasExe }, async () => {
    await runTest(import.meta.url, "npm1", async (dir) => {
        const r = await npm("run build", {cwd: dir, log:(f, a) => console.log(f, a)});
        console.log(r.text());
        equals(r.code, 0, "exit code must be zero");
        ok(r.text().includes("build"), "text must include 'build'");
    });
});
