import "../../styles/preview/ResumePreview.css";
import "../../styles/preview/PreviewExperience.css";
import { renderTextWithFormatting } from "../../utils/utils";

export default function PreviewExperience({ experienceData }) {
  return (
    <div className="previewExpMain">
      <h1>Experience</h1>
      {experienceData.map((experience) => {
        return (
          <div className="previewExpSub" key={experience.id}>
            <p className="previewCompanyName">{experience.companyName}</p>
            <div className="previewExpSubCluster">
              <p className="previewPositionTitle">{experience.positionTitle}</p>
              <p>|</p>
              <p className="previewStartYear">
                {experience.startYear.format("MMM YYYY")}
              </p>
              <p>-</p>
              <p className="previewEndYear">
                {experience.endYear.format("MMM YYYY")}
              </p>
            </div>
            <div className="previewExpMainResp">
              {renderTextWithFormatting(experience.mainResp)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
