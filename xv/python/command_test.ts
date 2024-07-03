import { assert as ok, assertEquals as equals } from "@std/assert";
import { remove, writeTextFile } from "@gnome/fs";
import { pathFinder } from "@gnome/exec/path-finder";
import { python, pythonScript } from "./command.ts";

const EOL = Deno.build.os === "windows" ? "\r\n" : "\n";

const hasExe = await pathFinder.findExe("python") !== undefined;

Deno.test("python", { ignore: !hasExe }, async () => {
    const cmd = python(["-V"]);
    ok((await cmd.text()).startsWith("Python"));
});

Deno.test("python: invoke inline script", { ignore: !hasExe }, async () => {
    const cmd = await pythonScript("print('Hello, World!')");
    equals(cmd.text(), `Hello, World!${EOL}`);
    equals(0, cmd.code);
});

Deno.test("python: invoke inline multi-line script", { ignore: !hasExe }, async () => {
    const cmd = await pythonScript(`
print('1')
print('2')
    `);
    console.log(cmd.text());
    console.log(cmd.errorText());
    equals(cmd.text(), `1${EOL}2${EOL}`);
    equals(0, cmd.code);
});

Deno.test("python: invoke script file", async () => {
    await writeTextFile("test.py", "print('Hello, World!')");
    try {
        // purposely add space after test.ps1
        const cmd = await pythonScript("test.py ");
        equals(0, cmd.code);
        equals(cmd.text(), `Hello, World!${EOL}`);
    } finally {
        await remove("test.py");
    }
});
