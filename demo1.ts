const nombre = "mundo";
console.log(
  `%cHola ${nombre}`,
  "background-color: blue; color: white; font-weight: bold;",
);

const res = await fetch("https://example.com/");
const body = await res.text();
console.log(body);

// try {
//   await fetch("https://does.not.exist/");
// } catch (error) {
//   console.log("ERROR", error);
// }

const file = await Deno.create('index.html')
// const file = await Deno.open('index.html', {write:true})
const encoder = new TextEncoder()
await file.write(encoder.encode(body))
file.close()

// deno run --allow-net --allow-read --allow-write demo1.ts
