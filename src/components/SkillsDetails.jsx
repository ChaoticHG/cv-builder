import '../styles/SkillsDetails.css';
import '../styles/commonStyles.css';
export default function SkillsDetails({skills,handleSkill,removeSkill,addSkill}){
    return(
        <form className="generalForm">
            <h2>Skills</h2>
            <h2>
            {
                skills.map(skill =>(
                    <div className="skillRow" key={skill.id}>
                        <input 
                            id={skill.id}
                            type="text" 
                            placeholder="Language or Techology (max 20 word)"
                            value={skill.text}
                            onChange={handleSkill}
                            maxLength={20}/>
                        {skills.length > 1 && <button onClick={() => removeSkill(skill.id)} type="button" className="deleteButton" >Delete</button> }
                    </div>
                ))
            }
            {
                skills.length < 12 &&
                <button type="button" className='addButton' onClick={()=> addSkill()} >
                    Add
                </button>
            } 
            </h2>
        </form>
    )
} 