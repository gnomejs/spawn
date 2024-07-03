import { assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { WINDOWS } from "@gnome/os-constants";
import { resolve } from "@std/path";
import { isFile } from "@gnome/fs";
import { cmdScript } from "./command.ts";

Deno.test({
    name: "cmd: simple inline test",
    ignore: !WINDOWS,
    fn: async () => {
        const cmd1 = await cmdScript("echo Hello, World!");
        equals(cmd1.text(), "Hello, World!\r\n");
        equals(0, cmd1.code);
    },
});

Deno.test({
    name: "cmd: simple inline test with options",
    ignore: !WINDOWS,
    fn: async () => {
        const cmd1 = await cmdScript("echo Hello, World!").run();
        equals(0, cmd1.code);
    },
});

Deno.test({
    name: "cmd: multi-line inline test",
    ignore: !WINDOWS,
    fn: async () => {
        const cmd1 = await cmdScript(`
            set a=1
            echo %a%
        `);
        equals(cmd1.text(), "1\r\n");
        equals(0, cmd1.code);
    },
});

Deno.test({
    name: "cmd: simple file test",
    ignore: !WINDOWS,
    fn: async () => {
        await writeTextFile(
            "test.cmd",
            `
        @echo off
        echo Hello, World!`,
        );
        try {
            const p = resolve("test.cmd");
            const exists = await isFile(p);

            if (!exists) {
                throw new Error("File does not exist at " + p);
            }

            // purposely add space after test.ps1
            const cmd1 = await cmdScript("test.cmd ");
            console.log(cmd1.errorText());
            console.log(cmd1.text());
            equals(cmd1.code, 0);
            equals(cmd1.text(), "Hello, World!\r\n");
        } finally {
            await remove("test.cmd");
        }
    },
});
