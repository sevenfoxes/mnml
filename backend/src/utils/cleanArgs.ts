export const cleanArgs = (args: any, removeArgs?: string[]) => Object
  .entries(args)
  .filter((_, v) => v)
  .filter(([k, v]) => removeArgs?.includes(k) || true)
  .reduce((a, [k, v]) => ({ ...a, [k]: v }), {})
