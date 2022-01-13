import Les from "../components/layouts/Les"
import {attributes, react as ChapterComponent } from "../content/chapter1.md" 

const Chapter = () => {
    let {title, color} = attributes

    return (
        <Les 
            sideBarTitle={title}
            type={color}
        >
            <ChapterComponent />
        </Les>
    )
}

export default Chapter