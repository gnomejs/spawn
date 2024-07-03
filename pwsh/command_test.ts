import { assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { pwshScript } from "./command.ts";

const EOL = Deno.build.os == "windows" ? "\r\n" : "\n";

Deno.test("simple inline test", async () => {
    const cmd = await pwshScript("Write-Host 'Hello, World!'");
    equals(cmd.text(), `Hello, World!${EOL}`);
    equals(0, cmd.code);
});

Deno.test("multi-line inline test", async () => {
    const cmd = await pwshScript(`
        $a = 1
        $b = 2
        $a + $b
    `);
    equals(cmd.text(), `3${EOL}`);
    equals(0, cmd.code);
});

Deno.test("simple file test", async () => {
    await writeTextFile("test.ps1", "Write-Host 'Hello, World!'");
    try {
        // purposely add space after test.ps1
        const cmd = await pwshScript("test.ps1 ");
        equals(0, cmd.code);
        equals(cmd.text(), `Hello, World!${EOL}`);
    } finally {
        await remove("test.ps1");
    }
});
