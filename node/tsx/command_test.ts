import { tsx, tsxScript } from "./command.ts";
import { remove, writeTextFile } from "@gnome/fs";
import { pathFinder } from "@gnome/exec/path-finder";
import { assert as ok, assertEquals as equals } from "@std/assert";

const hasTsx = pathFinder.findExeSync("tsx") !== undefined;

Deno.test({
    name: "tsx script",
    ignore: !hasTsx,
    fn: async () => {
        const result = await tsxScript("console.log('Hello, World!');");
        equals(await result.text(), `Hello, World!\n`);
        equals(result.code, 0);
    },
});

Deno.test(
    {
        name: "tsx",
        ignore: !hasTsx,
        fn: async () => {
            const result = await tsx("--version");
            equals(result.code, 0);
            ok(result.text().startsWith("tsx"));
        },
    },
);

Deno.test({
    name: "tsx script using files",
    ignore: !hasTsx,
    fn: async () => {
        const script = `console.log('Hello, World!');`;
        await writeTextFile("test.ts", script);
        await writeTextFile("test.mts", script);
        await writeTextFile("test.cts", script);

        try {
            const result = await tsxScript("test.ts");
            equals(await result.text(), `Hello, World!\n`);
            equals(result.code, 0);

            const result2 = await tsxScript("test.mts");
            equals(await result2.text(), `Hello, World!\n`);
            equals(result2.code, 0);

            const result3 = await tsxScript("test.cts");
            equals(await result3.text(), `Hello, World!\n`);
            equals(result3.code, 0);
        } finally {
            await remove("test.ts");
            await remove("test.mts");
            await remove("test.cts");
        }
    },
});
