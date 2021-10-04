import style from "./button.module.css"

interface ButtonProps {
    text: string,
    click?: () => void,
    id?: string,
    link?: string
}

export default function Button(props: ButtonProps) {
    return (
        props.link === undefined ?
            <button id={props.id} className={style.button} onClick={props.click}>
                {props.text}
            </button>
            :
            <a id={props.id} className={style.link} href={props.link} target="_blank">{props.text}</a>
    )
}
