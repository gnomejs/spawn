import { assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { pwshScript } from "./command.ts";

Deno.test("simple inline test", async () => {
    const cmd = await pwshScript("Write-Host 'Hello, World!'");
    equals(cmd.text(), "Hello, World!\n");
    equals(0, cmd.code);
});

Deno.test("multi-line inline test", async () => {
    const cmd = await pwshScript(`
        $a = 1
        $b = 2
        $a + $b
    `);
    equals(cmd.text(), "3\n");
    equals(0, cmd.code);
});

Deno.test("simple file test", async () => {
    await writeTextFile("test.ps1", "Write-Host 'Hello, World!'");
    try {
        // purposely add space after test.ps1
        const cmd = await pwshScript("test.ps1 ");
        equals(0, cmd.code);
        equals(cmd.text(), "Hello, World!\n");
    } finally {
        await remove("test.ps1");
    }
});
