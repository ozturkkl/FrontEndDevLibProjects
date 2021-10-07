import style from './Canvas.module.css'

interface CanvasProps {
    type: "preview" | "editor"
}

export default function Canvas(props: CanvasProps){
    return (
        <textarea id={props.type}></textarea>
        // TODO: Implement Marked --> https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
    )
}