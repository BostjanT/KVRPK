import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Tabs from '@/components/Tabs'
import Faq from '@/components/Faq'
import HomeNews from '@/components/HomeNews'
import Solanje from '@/components/Solanje'
import Sponzorji from '@/components/Sponzorji'
import HomeGallery from '@/components/HomeGallery'

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
            <HomeGallery />
            <Solanje />
            <Sponzorji />
        </>
    )
}
