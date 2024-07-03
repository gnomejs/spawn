import { npx } from "./command.ts";
import { assertEquals as equals } from "@std/assert";
import { runTest } from "../_test_utils.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("npx") !== undefined;

Deno.test("npx cowsay", { ignore: !hasExe }, async () => {
    await runTest(import.meta.url, "npx1", async (dir) => {
        const result = await npx("cowsay hello", { cwd: dir });
        equals(result.code, 0);
        console.log(result.text());
    });
});
