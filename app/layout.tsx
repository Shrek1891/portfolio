import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "@/app/provider";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Zhurba Alex Portfolio",
    description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning data-theme="dark">
        <head>
            <link rel="icon" href="/iconpf.jpg" sizes="any"/>
        </head>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
