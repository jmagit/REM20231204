export function add(a: number, b: number): number {
  return a + b;
}

addEventListener('load', () => console.log('%cInicio', 'color: red'))

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 1 + 2 =", add(1, 2));
}
addEventListener('unload', () => console.log('%cTermino', 'color: red'))
