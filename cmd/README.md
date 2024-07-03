# @spawn/cmd

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `cmd` module provides a simple way to execute
windows command line scripts or files.

The module relies upon the [@gnome/exec][exec] module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { cmdScript, cmd } from "@spawn/cmd";

const cmd2 = await cmdScript("echo Hello, World!");
console.log(cmd2.text());
console.log(cmd2.code);

console.log(await cmdScript("echo Hello, World!").text());

console.log(await cmdScript("test.cmd").text()); 

// runs a windows command and writes directly to console
await cmd("/c echo hello").run();
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
