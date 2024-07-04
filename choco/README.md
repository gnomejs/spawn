# @spawn/choco

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `choco` module provides a simple way to execute
choco commands.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { choco } from "@spawn/choco";
 
const result = choco("--version");
console.log(result.code);
console.log(result.text());

```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
