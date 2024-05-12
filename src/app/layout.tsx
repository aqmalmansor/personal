import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@mantine/core/styles.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Aqmal Mansor',
    description: 'Malaysian Software Engineer, Frontend Developer, Web Developer',
};

interface IRootLayout {
    children: React.ReactNode;
}

const RootLayout = ({
    children,
}: Readonly<IRootLayout>) => {
    return (
        <html lang='en'>
            <head>
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
};

export default RootLayout;
