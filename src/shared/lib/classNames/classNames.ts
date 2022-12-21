/* eslint-disable @typescript-eslint/no-unused-vars */
type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  console.log(cls);
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(" ");
}