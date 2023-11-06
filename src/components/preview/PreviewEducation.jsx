import "../../styles/preview/ResumePreview.css";
import "../../styles/preview/PreviewEducation.css";

export default function PreviewEducation({ educationData }) {
  return (
    <div className="previewEduMain">
      <h1>Education History</h1>
      {educationData.map((education) => {
        return (
          <div className="previewEduSub" key={education.id}>
            <p className="previewStudyTitle">{education.studyTitle}</p>
            <div className="previewEduSubYear">
              <p className="previewSchoolName">{education.schoolName}</p>
              <p>|</p>
              <p className="previewStartYear">
                {education.startYear.format("MMM YYYY")}
              </p>
              <p>-</p>
              <p className="previewEndYear">
                {education.endYear.format("MMM YYYY")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
