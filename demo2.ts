const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/jmagit", { // https://pokeapi.co/api/v2/pokemon/100
    headers: {
      accept: "application/json",
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

Deno.serve(handler);

// deno run --allow-net demo2.ts
// curl http://localhost:8000
