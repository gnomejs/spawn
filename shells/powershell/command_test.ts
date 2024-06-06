import { assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { powershellScript } from "./command.ts";

const EOL = Deno.build.os === "windows" ? "\r\n" : "\n";

Deno.test("powershell: simple inline test", async () => {
    const cmd = await powershellScript("Write-Host 'Hello, World!'");
    equals(cmd.text(), `Hello, World!\n`);
    equals(0, cmd.code);
});

Deno.test("powershell: multi-line inline test", async () => {
    const cmd = await powershellScript(`
        $a = 1
        $b = 2
        $a + $b
    `);
    equals(cmd.text(), `3${EOL}`);
    equals(0, cmd.code);
});

Deno.test("powershell: simple file test", async () => {
    await writeTextFile("test.ps1", "Write-Host 'Hello, World!'");
    try {
        // purposely add space after test.ps1
        const cmd = await powershellScript("test.ps1 ");
        equals(0, cmd.code);
        equals(cmd.text(), `Hello, World!\n`);
    } finally {
        await remove("test.ps1");
    }
});
