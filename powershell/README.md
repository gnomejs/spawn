# @gnome/powershell

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `powershell` module provides a simple way to execute
PowerShell scripts or files on Windows.

The module relies upon the [@gnome/exec][exec] module and
has the same basic ussops as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { powershellScript, powershell } from "@gnome/powershell";

const cmd = await powershellScript("Write-Host 'Hello, World!'");
console.log(cmd.text());
console.log(cmd.code);

console.log(await powershellScript("Write-Host 'Hello, World!'").text());
console.log(await powershellScript("test.ps1").text()); 

// runs powershell command and writes directly to console
await powershellScript("Write-Host 'I am alive'").run();

await powershell(["-ExecutionPolicy", "Bypass", "-File", "path/to/file.ps1"]).run();
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
