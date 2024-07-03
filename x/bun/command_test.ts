import { bun, bunScript } from "./command.ts";
import { remove, writeTextFile } from "@gnome/fs";
import { pathFinder } from "@gnome/exec/path-finder";
import { assert as ok, assertEquals as equals } from "@std/assert";

const hasExe = await pathFinder.findExe("bun") !== undefined;

Deno.test("bun: simple inline", { ignore: !hasExe }, async () => {
    const result = await bun("--version");
    equals(result.code, 0);
    // todo: update test to be less brittle
    ok(result.text().startsWith("1"));
});

Deno.test("bun: invoke inline script", { ignore: !hasExe }, async () => {
    const result = await bunScript("console.log('Hello, World!');");
    equals(await result.text(), `Hello, World!\n`);
    equals(result.code, 0);
});

Deno.test("bun: invoke script files", { ignore: !hasExe }, async () => {
    const script = `console.log('Hello, World!');`;
    await writeTextFile("test.js", script);
    await writeTextFile("test.ts", script);

    try {
        const result = await bunScript("test.js");
        equals(await result.text(), `Hello, World!\n`);
        equals(result.code, 0);

        const result2 = await bunScript("test.ts");
        equals(await result2.text(), `Hello, World!\n`);
        equals(result2.code, 0);
    } finally {
        await remove("test.js");
        await remove("test.ts");
    }
});
