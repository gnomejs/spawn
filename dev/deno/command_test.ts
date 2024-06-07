import { denoScript, deno } from "./command.ts";
import { remove, writeTextFile } from "@gnome/fs";
import { pathFinder } from "@gnome/exec/path-finder";
import { assert as ok, assertEquals as equals } from "@std/assert";

const hasExe = await pathFinder.findExe("deno") !== undefined;

Deno.test("deno", { ignore: !hasExe }, async () => {
    const result = await deno("--version");
    equals(result.code, 0);
    ok(result.text().startsWith("deno"));
});


Deno.test("deno: invoke inline script", { ignore: !hasExe }, async () => {
    const result = await denoScript("console.log('Hello, World!');");
    equals(await result.text(), `Hello, World!\n`);
    equals(result.code, 0);
});

Deno.test("deno: invoke script files", async () => {
    const script = `console.log('Hello, World!');`;
    await writeTextFile("test.js", script);
    await writeTextFile("test.ts", script);

    try {
        const result = await denoScript("test.js");
        equals(await result.text(), `Hello, World!\n`);
        equals(result.code, 0);

        const result2 = await denoScript("test.ts");
        equals(await result2.text(), `Hello, World!\n`);
        equals(result2.code, 0);
    } finally {
        await remove("test.js");
        await remove("test.ts");
    }
});
