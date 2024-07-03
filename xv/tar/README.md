# @spawn/common/age

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The age module wraps the age cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { age } from '@spawn/common/age'

// outputs directly to stdout and stderror streams.
await age("-h").run();

// pipes the output
const result = await age("-h");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
