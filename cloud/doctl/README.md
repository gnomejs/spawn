# @spawn/cloud/doctl

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The doctl module wraps the doctl cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { doctl } from '@spawn/cloud/doctl'

// outputs directly to stdout and stderror streams.
await doctl("-h").run();

// pipes the output
const result = await doctl("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
