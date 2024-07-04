# @spawn/ssh

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `ssh` module provides a simple way to execute
ssh commands.

The module relies upon the [@gnome/exec][exec] module and
has the same basic usage as the `Command` class.

## Basic Usage

```typescript
import { ssh } from "@spawn/ssh";

await ssh(["user@host", "ls"]).run(); 
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
