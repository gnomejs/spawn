import { assert as ok } from "@std/assert";
import { sops} from "./command.ts";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = await pathFinder.findExe("sops");

Deno.test("sops: help", { ignore: !hasExe }, async () => {
    const r = await sops("-h");
    ok(r.code === 0);
});
