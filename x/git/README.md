# @spawn/common/git

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The git module wraps the git cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { git } from '@spawn/common/git'

// outputs directly to stdout and stderror streams.
await git("--version").run();

// pipes the output
const result = await git("--version");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
