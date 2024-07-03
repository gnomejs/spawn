# @spawn/cloud/az

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The az module wraps the az cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { az } from '@spawn/cloud/az'

// outputs directly to stdout and stderror streams.
await az("-h").run();

// pipes the output
const result = await az("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
