import { nodeScript, node } from "./command.ts";
import { remove, writeTextFile } from "@gnome/fs";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { pathFinder } from "jsr:@gnome/exec@^0.4.4/path-finder";

const hasExe = await pathFinder.findExe("node") !== undefined;

Deno.test("node script", {ignore: !hasExe}, async () => {
    const result = await nodeScript("console.log('Hello, World!');");
    equals(await result.text(), `Hello, World!\n`);
    equals(result.code, 0);
});

Deno.test("node", {ignore: !hasExe}, async () => {
    const result = await node("--version");
    equals(result.code, 0);
    ok(result.text().startsWith("v"));
});

Deno.test("node script with files", {ignore: !hasExe}, async () => {
    const script = `console.log('Hello, World!');`;
    await writeTextFile("test.js", script);
    await writeTextFile("test.mjs", script);
    await writeTextFile("test.cjs", script);

    try {
        const result = await nodeScript("test.js");
        equals(await result.text(), `Hello, World!\n`);
        equals(result.code, 0);

        const result2 = await nodeScript("test.mjs");
        equals(await result2.text(), `Hello, World!\n`);
        equals(result2.code, 0);

        const result3 = await nodeScript("test.cjs");
        equals(await result3.text(), `Hello, World!\n`);
        equals(result3.code, 0);
    } finally {
        await remove("test.js");
        await remove("test.mjs");
        await remove("test.cjs");
    }
});