/**
 * ## Overview
 * 
 * The age module wraps the age cli. [@gnome/exec](https://jsr.io/@gnome/exec)
 * powers this module.
 * 
 * ```typescript
 * import { age } from '@spawn/x/age'
 * 
 * // outputs directly to stdout and stderror streams.
 * await age("-h").run();
 * 
 * // pipes the output
 * const result = await age("-h");
 * console.log(result.stdout);
 * console.log(result.text());
 * console.log(result.code);
 * ```
 * 
 * ## License
 * 
 * [MIT](./LICENSE.md)
 * 
 */
export { age, ageKeygen } from "./command.ts";
