import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../styles/commonStyles.css";

export default function EducationDetails({
  educationDetails,
  handleEducation,
  deleteEducation,
  addEducation,
}) {
  return (
    <div className="generalForm">
      <h2>Education Details</h2>

      {educationDetails.map((educationDetail, index) => {
        return (
          <div className="subGeneralForm" key={educationDetail.id}>
            {educationDetails.length > 1 && <h3>Education {index + 1}</h3>}
            <form>
              <label>
                <span>School Name</span>
                <input
                  name="schoolName"
                  type="text"
                  placeholder="Enter School / University"
                  maxLength="38"
                  autoComplete="off"
                  value={educationDetail.schoolName}
                  onChange={(e) =>
                    handleEducation(
                      educationDetail.id,
                      "schoolName",
                      e.target.value
                    )
                  }
                />
              </label>
              <label>
                <span>Study Title</span>
                <input
                  name="studyTitle"
                  type="text"
                  placeholder="Enter study title"
                  maxLength="38"
                  autoComplete="off"
                  value={educationDetail.studyTitle}
                  onChange={(e) =>
                    handleEducation(
                      educationDetail.id,
                      "studyTitle",
                      e.target.value
                    )
                  }
                />
              </label>
              <div className="yearSelector">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="startYear"
                    label={"Start Year"}
                    views={["month", "year"]}
                    value={educationDetail.startYear}
                    onChange={(e) =>
                      handleEducation(educationDetail.id, "startYear", e)
                    }
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="endYear"
                    label={"End Year"}
                    views={["month", "year"]}
                    value={educationDetail.endYear}
                    onChange={(e) =>
                      handleEducation(educationDetail.id, "endYear", e)
                    }
                  />
                </LocalizationProvider>
              </div>
            </form>
            {educationDetails.length > 1 && (
              <button
                className="deleteButton"
                onClick={() => deleteEducation(educationDetail.id)}
              >
                Delete
              </button>
            )}
            {educationDetails.length < 2 && (
              <button className="addButton" onClick={addEducation}>
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
