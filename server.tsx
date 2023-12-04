import React from 'https://esm.sh/react'
import { renderToString } from 'https://esm.sh/react-dom/server'

function saluda(nombre: string) {
    return (
        <div>
            <h1>Hola {nombre}</h1>
        </div>
    )
}

function handler(_req: Request): Response {
    return new Response(renderToString(saluda('mundo')));
  }
Deno.serve(handler);

// deno run --allow-net --watch server.tsx
