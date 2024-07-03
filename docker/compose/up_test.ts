import { up, type UpArgs } from "./up.ts";
import { splatCompose } from "./command.ts";
import { assert as ok, assertEquals as equals } from "@std/assert";
import { whichSync } from "@gnome/exec";

const hasDocker = whichSync("docker") !== undefined;

Deno.test("parse up args", () => {
    const params: UpArgs = {
        file: ["docker-compose.yml", "docker-compose.override.yml"],
        projectName: "test",
        wait: true,
        services: ["one"],
    };

    params.splat ??= {};
    params.splat.command = ["up"];
    params.splat.arguments = ["services"];
    params.splat.appendArguments = true;
    const args = splatCompose(params);
    equals(args, [
        "compose",
        "--file",
        "docker-compose.yml",
        "--file",
        "docker-compose.override.yml",
        "--project-name",
        "test",
        "up",
        "--wait",
        "one",
    ]);
});

Deno.test({
    name: "compose up help",
    ignore: !hasDocker,
}, async () => {
    const result = await up({ help: true });
    equals(result.code, 0);
    ok(result.text().trim().startsWith("Usage"));
});
