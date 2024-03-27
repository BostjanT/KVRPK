import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/outline'

const Solanje = () => {
    return (
        <div className="flex  items-center justify-center bg-darkGrey text-whiter py-12 px-3">
            <div className="flex flex-col items-center justify-center max-w-3xl">
                <h2 className="text-whiter mb-8">pasja šola</h2>

                <p className="text-md text-center">
                    V klubu izvajamo tudi šolanje psov. Vpis v pasjo šolo poteka
                    skozi celo leto. Za več informacij o šolanju pokličite ali
                    pa nas kontaktirate preko
                </p>
                <div className="flex mx-auto mt-6 text-white">
                    <PhoneIcon className="h-6 w- mr-4" />
                    <p>+386 41 855 924</p>
                </div>
                <div className="flex mx-auto  mt-4 items-center text-white">
                    <AtSymbolIcon className="h-6 w-6 mr-4" />
                    <p>david.pogacnik@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Solanje
