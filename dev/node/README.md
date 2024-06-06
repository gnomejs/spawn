# @spawn/common/age

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The age module wraps the age cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { nodeShell } from '@spawn/dev/node'

// outputs directly to stdout and stderror streams.
await nodeShell("console.log('Hello')").run();

// pipes the output
const result = await nodeShell("console.log('Hello')");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);

// invoke a file
const result2 = await nodeShell("test.js", { cwd: '/tmp' });
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

```typescript
import { node } from '@spawn/dev/node'

// outputs directly to stdout and stderror streams.
await node("-h").run();

// pipes the output
const result = await node("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
