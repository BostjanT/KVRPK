import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Tabs from '@/components/Tabs'
import Faq from '@/components/Faq'
import Gallery from '@/components/Galerry'
import HomeNews from '@/components/HomeNews'

export const metadata: Metadata = {
    title: 'Klub vodnikov reševalnih psov Kranj',
}

export default function Home() {
    return (
        <>
            <Hero />
            <Tabs />
            <HomeNews />
            <Faq />
            <Gallery />
        </>
    )
}
