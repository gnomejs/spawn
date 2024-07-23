# @spawn/go

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `go` module provides a simple way to execute
go commands.

The module relies upon the [@gnome/exec][exec] module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { go } from "@spawn/go";

await go(["help", "build"]).run();

await go(["build", "-o", "/path/to/exe"]);
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
