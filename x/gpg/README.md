# @spawn/common/gpg

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The gpg module wraps the gpg cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { gpg } from '@spawn/common/gpg'

// outputs directly to stdout and stderror streams.
await gpg("-h").run();

// pipes the output
const result = await gpg("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
