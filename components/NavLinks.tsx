import Link from 'next/link'

type LinkProps = {
    href: string
    children: string
    onClick?: () => void
}

type NavLinksProps = {
    isOpen?: boolean
    toggleMenu: () => void
}

const NavLinks = ({ isOpen, toggleMenu }: NavLinksProps) => {
    const links = [
        { href: '/klub', text: 'O nas' },
        { href: '/resevalni', text: 'Reševalni pes' },
        { href: '/novice', text: 'Novice' },
        { href: '/galerija', text: 'Galerija' },
    ]
    return (
        <>
            {links.map((link, index) => (
                <MobileNavLink
                    key={index}
                    href={link.href}
                    onClick={() => toggleMenu()}>
                    {link.text}
                </MobileNavLink>
            ))}
        </>
    )
}

const MobileNavLink = ({ href, children, onClick }: LinkProps) => (
    <Link
        href={href}
        onClick={onClick}
        className="block py-2 font-medium md:tracking-wide  text-white  hover:text-darkGrey transition-colors duration-300 rounded-md">
        {children}
    </Link>
)

export default NavLinks
