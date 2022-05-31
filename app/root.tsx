import type {MetaFunction} from "remix";
import {Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "remix";

import coreStyles from '~/src/styles/core.css';
import NavigationBar from "~/src/components/navigation-bar";
import Footer from "~/src/components/footer";
import {HomeMenuSections, SocialMediaList} from "~/src/values";
import {createContext, useState} from "react";
import {MenuSection} from "~/declarations";

export const meta: MetaFunction = () => {
    return {title: "Katalina Pozzoli Portfolio"};
};

export const links: LinksFunction = () => {
    return [
        {rel: 'stylesheet', href: coreStyles},
        {rel: "icon", href: "/assets/icons/glitters-icon.png", type: "image/png"},
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Merriweather:wght@300;400;700&family=Poppins:wght@100;200;300;400;500&family=Reenie+Beanie&display=swap"
        }
    ]
}

export interface NavigationContext {
    menuItems: MenuSection[]
    setMenuItems: (items: MenuSection[]) => void,
    scrolledSection: string,
    setScrolledSection: (section: string) => void
}
export const navigationContext = createContext<NavigationContext>({
    menuItems: [],
    setMenuItems: () => {},
    scrolledSection: '',
    setScrolledSection: ( ) => {
    }
})

export default function App() {
    const [scrolledSection, setScrolledSection] = useState('')
    const [menuItems, setMenuItems] = useState(HomeMenuSections)

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title> Katalina Pozzoli Portfolio </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
            {typeof document === "undefined"
                ? "__STYLES__"
                : null}
        </head>
        <body>
        <navigationContext.Provider value={{menuItems, setMenuItems, scrolledSection, setScrolledSection}}>
            <header>
                <NavigationBar menuSections={menuItems}/>
            </header>
            <Outlet/>
            <footer>
                <Footer socialMedia={SocialMediaList}/>
            </footer>
        </navigationContext.Provider>
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV === "development" && <LiveReload/>}
        </body>
        </html>
    );
}
