import { useState } from "react";
import { usePDF } from "react-to-pdf";
import "./styles/App.css";
import "./styles/global.css";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { personalData, educationData, skillData, expData } from "./sampleData";
import PersonalDetails from "./components/personalDetails";
import EducationDetails from "./components/EducationDetails";
import SkillsDetails from "./components/SkillsDetails";
import ExperienceDetails from "./components/ExperienceDetails";
import ResumePreview from "./components/preview/ResumePreview";

function App() {
  const [personalDetails, setPersonalDetails] = useState(personalData);
  const [educationDetails, setEducationDetails] = useState(educationData);
  const [skillDetails, setSkillDetails] = useState(skillData);
  const [expDetails, setExpDetails] = useState(expData);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  function handleChangeGeneralInfo(dataName, newData) {
    setPersonalDetails({ ...personalDetails, [dataName]: newData });
  }

  function handleChangeEdu(id, dataName, newData) {
    const newEducation = educationDetails.map((education) => {
      if (education.id === id) {
        education[dataName] = newData;
        return education;
      } else {
        return education;
      }
    });
    setEducationDetails([...newEducation]);
  }

  function handleAddEducation() {
    const newEducation = {
      id: uuidv4(),
      schoolName: "",
      studyTitle: "",
      startYear: dayjs("YYYY-MM"),
      endYear: dayjs("YYYY-MM"),
    };
    setEducationDetails([...educationDetails, newEducation]);
  }

  function handleDeleteEducation(id) {
    setEducationDetails(
      educationDetails.filter((education) => education.id !== id)
    );
  }

  function handleChangeSkill(props) {
    setSkillDetails(
      skillDetails.map((skill) => {
        if (skill.id === props.target.id) skill.text = props.target.value;
        return skill;
      })
    );
  }

  function handleDeleteSkill(id) {
    setSkillDetails(skillDetails.filter((skill) => skill.id !== id));
  }

  function handleAddSkill() {
    setSkillDetails((skillDetails) => [
      ...skillDetails,
      { id: uuidv4(), text: "" },
    ]);
  }

  function handleChangeExp(id, dataName, newData) {
    const newExp = expDetails.map((exp) => {
      if (exp.id === id) {
        exp[dataName] = newData;
        return exp;
      } else {
        return exp;
      }
    });
    setExpDetails([...newExp]);
  }

  function handleDeleteExp(id) {
    setExpDetails(expDetails.filter((exp) => exp.id !== id));
  }

  function handleAddExp() {
    setExpDetails((expDetails) => [
      ...expDetails,
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        mainResp: "",
        startYear: dayjs("YYYY-MM"),
        endYear: dayjs("YYYY-MM"),
      },
    ]);
  }

  function deleteData() {
    setPersonalDetails({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      summary: "",
    });
    setSkillDetails([{ id: uuidv4(), text: "" }]);
    setEducationDetails([
      {
        id: uuidv4(),
        schoolName: "",
        studyTitle: "",
        startYear: dayjs("YYYY-MM"),
        endYear: dayjs("YYYY-MM"),
      },
    ]);
    setExpDetails([
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        mainResp: "",
        startYear: dayjs("YYYY-MM"),
        endYear: dayjs("YYYY-MM"),
      },
    ]);
  }

  function readData() {
    setPersonalDetails(personalData);
    setSkillDetails(skillData);
    setEducationDetails(educationData);
    setExpDetails(expData);
  }

  return (
    <div className="mainApp">
      <div className="editSection">
        <div className="editForm">
          <div className="pageEdit">
            <button className="clearData" onClick={deleteData}>
              Clear Data
            </button>
            <button className="readData" onClick={readData}>
              Read Data
            </button>
            <button className="ecportPDF" onClick={() => toPDF()}>
              Export PDF
            </button>
          </div>
          <PersonalDetails
            personalDetails={personalDetails}
            handlePersonal={handleChangeGeneralInfo}
          />
          <SkillsDetails
            skills={skillDetails}
            handleSkill={handleChangeSkill}
            removeSkill={handleDeleteSkill}
            addSkill={handleAddSkill}
          />
          <EducationDetails
            educationDetails={educationDetails}
            handleEducation={handleChangeEdu}
            addEducation={handleAddEducation}
            deleteEducation={handleDeleteEducation}
          />
          <ExperienceDetails
            experiences={expDetails}
            handleExp={handleChangeExp}
            deleteExp={handleDeleteExp}
            addExp={handleAddExp}
          />
        </div>
      </div>
      <div className="overview" ref={targetRef}>
        <ResumePreview
          personalData={personalDetails}
          educationData={educationDetails}
          skillData={skillDetails}
          experienceData={expDetails}
        />
      </div>
    </div>
  );
}

export default App;
