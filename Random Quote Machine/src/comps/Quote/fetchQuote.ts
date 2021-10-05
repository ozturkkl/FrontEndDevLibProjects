export default async function fetchQuote(){
    let data = await(await fetch("https://api.quotable.io/random")).json()

    return {
        quote: data.content,
        author: data.author
    }
}