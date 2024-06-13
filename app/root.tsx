import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import styles from "./tailwind.css?url";
import "./custom.css";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", type: "text/css", href: styles },
    { rel: "icon", type: "image/ico", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Pixelify+Sans:wght@400..700&display=swap" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css" }
  ];
};



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

