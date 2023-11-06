import PreviewPersonal from "./PreviewPersonal";
import PreviewEducation from "./PreviewEducation";
import PreviewSkills from "./PreviewSkills";
import PreviewExperience from "./PreviewExperience";
import "../../styles/preview/ResumePreview.css";

export default function ResumePreview({
  personalData,
  educationData,
  skillData,
  experienceData,
}) {
  return (
    <div className="previewResume">
      <div className="cluster1">
        <PreviewPersonal personalData={personalData} />
        <PreviewSkills skillData={skillData} />
      </div>
      <div className="cluster2">
        <PreviewEducation educationData={educationData} />
        <PreviewExperience experienceData={experienceData} />
      </div>
    </div>
  );
}
