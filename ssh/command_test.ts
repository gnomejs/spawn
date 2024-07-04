import { ssh } from "./command.ts";
import { assertEquals as equals } from "@std/assert";

Deno.test("ssh: help", async () => {
    const result = await ssh({ help: true });
    equals(result.code, 255);
});
