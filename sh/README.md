# @spawn/sh

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `sh` module provides a simple way to execute scripts using the `sh` shell.

The module relies upon the [@gnome/exec][exec] module and
has the same basic ussops as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { shScript, sh } from "@spawn/sh";

const cmd = await shScript("echo 'Hello, World!'");
console.log(cmd.text());
console.log(cmd.code);

console.log(await shScript("echo 'Hello, World!'").text());
console.log(await shScript("test.sh").text());

// runs sh command and writes directly to console
await shScript("echo 'I am alive'").run();
await sh(["-e", "path/to/file.sh"]).run();
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
