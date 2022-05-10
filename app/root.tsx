import {
  Links, LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import coreStyles from '~/styles/core.css';

export const meta: MetaFunction = () => {
  return { title: "Katalina Pozzoli Portfolio" };
};

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: coreStyles},
    {rel: "icon", href: "/icon.png", type:"image/png"},
    {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Merriweather:wght@300;400;700&family=Reenie+Beanie&display=swap"}
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> Katalina Pozzoli Portfolio </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined"
            ? "__STYLES__"
            : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
