import style from "./Quote.module.css"

interface quoteProps {
    quoteData: {
        quote: string,
        author: string
    }
}

export default function Quote(props: quoteProps) {
    return (
        <div className={style.quote + " quote"}>
            <h1 id="text">{`"${props.quoteData.quote}"`}</h1>
            <p id="author">{`- ${props.quoteData.author}`}</p>
        </div>
    )
}
