# @spawn/common/sudo

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The sudo module wraps the sudo cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { sudo } from '@spawn/common/sudo'

// outputs directly to stdout and stderror streams.
await sudo("-h").run();

// pipes the output
const result = await sudo("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
