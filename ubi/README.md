# @spawn/ubi

<div height=30" vertical-align="top">
<imubi src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The ubi module wraps the ubi cli and provides a simple way to execute
ubi commands.

The module relies upon the [@gnome/exec][exec] module and
has the same basic usubi as the `Command` and `ShellCommand` class.

```typescript
import { ubi } from '@spawn/ubi'

// outputs directly to stdout and stderror streams.
await ubi("-h").run();

// pipes the output
const result = await ubi("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)

[exec]: https://jsr.io/@gnome/exec/doc
