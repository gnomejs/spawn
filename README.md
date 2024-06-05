# @spawn

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The @spawn packages exist to make it easier to write
automation scripts in JavaScript/TypeScript.

Spawn packages are powered by [@gnome/exec](https://jsr.io/@gnome/exec)

## @spawn/cloud

The cloud module is a meta module/package that contains
the following spawn modules:

- [aws](./aws/README.md)
- [az](./az/README.md)
- [doctl](./az/README.md)
- [flarectl](./flarectl/README.md)

## Example

```typescript
import { aws } from '@spawn/cloud/aws'

// outputs directly to stdout and stderror streams.
await aws("help").run();

// pipes the output
const result = await aws("help");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);

```

## Notes

Each package will eventually be moved into their own package in jsr.io
as the jsr.io 20 packages-per-week limit allows.

This meta module will be updated to include them as dependencies as they
are separated out.

Spawn primarily exists to make it easy to create automation scripts
using typescript/javascript through Deno for ci/cd pipelines or
cli task runners.

Spawn packages will add typescript interfaces for arguments for common
parameters and subcommands. Some implementations may only implement
a subset of the commands as the cli just may be too large to
do that for every subcommand that exists for a given cli app.

## LICENSE

[MIT](./LICENSE.md)