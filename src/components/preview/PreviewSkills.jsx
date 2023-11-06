import "../../styles/preview/ResumePreview.css"
import "../../styles/preview/PreviewSkill.css"

export default function PreviewSkills({skillData}){
    return(
        <div className="previewSkillMain">
            <h1>Skills</h1>
            {skillData.map( skill => {
                return(
                    <div className="previewSkillSub" key={skill.id}>
                        <li>{skill.text}</li>
                    </div>
                )
            })}
        </div>
    )
}