/* export const getReview = async ()) => {
  const {data } = await fetchArticles()

  if(data.length === 0)
} */

const fetchArticles = async () => {
  const response = await fetch(`@/public/news.json`) 
  if (!response.ok) {
    throw new Error('There is an issue getting your data')
  }
  console.log(response)
  return response
}