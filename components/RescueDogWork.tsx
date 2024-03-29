const rescueText = [
    {
        header: 'Izbira pravega psa',
        text: 'Za začetek je pomembno, da se izbere pes z ustrezno temperamentno in fizično sposobnostjo za delo reševalnega psa. Pasme, kot so nemški ovčarji, labradorci, border coliji in belgijski ovčarji, so pogosto izbrane zaradi svoje inteligence, učljivosti in fizične vzdržljivosti. Pes mora imeti močan nagon za iskanje, biti mora socialen in sposoben delati v različnih okoljih.',
    },
    {
        header: 'Osnovno usposabljanje',
        text: 'Usposabljanje se začne z osnovnimi ukazi poslušnosti, kot so "sed", "lezi", "prost" in "k meni". Ti ukazi so temelj za nadaljnje napredno usposabljanje. Prav tako se v tem zgodnjem obdobju začne graditi trdna vez med vodnikom in psom, ki je ključnega pomena za uspeh v reševalnih operacijah.',
    },
    {
        header: 'Specializirano usposabljanje',
        text: 'Ko je osnovno usposabljanje končano, se preide na specializirano usposabljanje, ki je odvisno od vrste reševalnega dela, za katero je pes namenjen. To lahko vključuje iskanje pogrešanih oseb v naravi, iskanje v ruševinah po naravnih katastrofah, iskanje zasutih v plazovih ali iskanje v vodi. Usposabljanje vključuje učenje psa, kako uporabljati njegov voh za iskanje ljudi, ter kako pravilno označiti najdbo.',
    },
    {
        header: 'Delo v različnih okoljih',
        text: 'Zelo pomembno je, da se pes nauči delati v različnih okoljih in pri različnih vremenskih pogojih. To pomeni usposabljanje na različnih terenih, v različnih vremenskih razmerah in ob različnih urah dneva in noči. Vodnik in pes se morata naučiti delovati kot ekipa ne glede na zunanje okoliščine.',
    },
    {
        header: 'Psihološka priprava',
        text: 'Poleg fizičnega usposabljanja je pomembna tudi psihološka priprava tako psa kot vodnika. Reševalne operacije so lahko psihološko zahtevne, saj se vodnik in pes soočata z nujnimi situacijami in včasih tudi s tragičnimi izidi. Zato je del usposabljanja namenjen tudi krepitvi psihične odpornosti.',
    },
    {
        header: 'Stalno vzdrževanje in izpopolnjevanje',
        text: 'Usposabljanje reševalnega psa in njegovega vodnika ni nikoli dokončano. Stalno vzdrževanje veščin in redno izpopolnjevanje sta ključnega pomena za ohranjanje pripravljenosti na visokem nivoju. To vključuje redne treninge, udeležbo na delavnicah in seminarjih ter testiranja za preverjanje usposobljenosti.  Usposabljanje vodnika reševalnega psa in psa samega je zahteven proces, ki pa prinaša neprecenljive koristi. Ekipa, sestavljena iz vodnika in psa',
    },
]

const RescueDogWork = () => {
    return (
        <>
            {rescueText.map((rescue, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col max-w-4xl mx-auto my-3 px-2">
                        <h3 className="text-2xl font-bold">{rescue.header}</h3>
                        <p>{rescue.text}</p>
                    </div>
                )
            })}
        </>
    )
}

export default RescueDogWork
