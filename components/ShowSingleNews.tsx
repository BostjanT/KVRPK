import { useRouter } from 'next/router'

const ShowSingleNews = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Article ID {id}</h1>
            <p>if you can see this then it works</p>
        </div>
    )
}

export default ShowSingleNews
