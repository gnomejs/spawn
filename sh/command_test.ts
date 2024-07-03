import { assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { shScript } from "./command.ts";

Deno.test("sh: simple inline test", async () => {
    const cmd = await shScript("echo 'Hello, World!'");
    equals(cmd.text(), "Hello, World!\n");
    equals(0, cmd.code);
});

Deno.test("sh: multi-line inline test", async () => {
    const cmd = await shScript(`
        a=1
        b=2
        expr $a + $b
    `);
    equals(cmd.text(), "3\n");
    equals(0, cmd.code);
});

Deno.test("sh: simple file test", async () => {
    await writeTextFile("test.sh", "echo 'Hello, World!'");
    try {
        // purposely add space after test.ps1
        const cmd = await shScript("test.sh ");
        equals(0, cmd.code);
        equals(cmd.text(), "Hello, World!\n");
    } finally {
        await remove("test.sh");
    }
});
