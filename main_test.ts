import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { add } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});
Deno.test({ name: 'IEEE Error', fn() {
  assertEquals(add(0.1, 0.2), 0.3);
}});
