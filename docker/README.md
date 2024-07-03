# @spawn/docker

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `docker-cli` module provides a simple way to execute
docker commands.

The module relies upon the [@gnome/exec][exec] module and
has the same basic usage as the `Command` and `ShellCommand` class.

## Basic Usage

```typescript
import { docker } from "@spawn/docker";
 
await docker(["ps"]).run();

const result = await docker(["ps"]);
console.log(result.code);
console.log(result.text());
```

[MIT License](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
