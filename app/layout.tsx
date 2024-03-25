import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const monte = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Klub vodnikov reševalnih psov Kranj',
    description: 'Spletna stran kluba vodnikov reševalnih psov Kranj',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={monte.className}>
                <>
                    <Navigation />
                    {children}
                    <Footer />
                </>
            </body>
        </html>
    )
}
