# @spawn/aws

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

The aws module wraps the aws cli. [@gnome/exec](https://jsr.io/@gnome/exec)
powers this module.

```typescript
import { aws } from '@spawn/aws'

// outputs directly to stdout and stderror streams.
await aws("help").run();

// pipes the output
const result = await aws("help");
console.log(result.stdout);
console.log(result.text());
console.log(result.code);
```

## License

[MIT](./LICENSE.md)
