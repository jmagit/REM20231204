import express from "npm:express@4.18.2";
const app = express();
app.get("/", (_req, res) => {
  res.send("Welcome to the Dinosaur API!");
});
app.listen(3000);
console.info(`Arrancada`)

// deno run --allow-net --allow-read --allow-env express.ts
// deno run --allow-net --allow-read --allow-env https://examples.deno.land/npm.ts
// deno run https://examples.deno.land/npm.ts
