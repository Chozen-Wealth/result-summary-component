import data from "../data.json"
import iconReaction from "../assets/icon-reaction.svg"
import iconMemory from "../assets/icon-memory.svg"
import iconVerbal from "../assets/icon-verbal.svg"
import iconVisual from "../assets/icon-visual.svg"

let icons = {
    Reaction: iconReaction,
    Memory: iconMemory,
    Verbal: iconVerbal,
    Visual: iconVisual
}

export default function Summary() {
    return(
        <div className='summary'>
            {data.map((item, index) => (
                <div className='summaryElement' key={index}>
                    <div className="innerElement">
                        <img src={icons[item.category]} alt={item.category + " icon"} />
                        {item.category}
                    </div>
                    <span className='chiffres'><b>{item.score} </b>/ 100</span>
                </div>
            ))}
        </div>
    )
}