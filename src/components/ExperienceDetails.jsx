import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../styles/commonStyles.css";

export default function ExperienceDetails({
  experiences,
  handleExp,
  addExp,
  deleteExp,
}) {
  return (
    <div className="generalForm">
      <h2>Experience Details</h2>

      {experiences.map((experience, index) => {
        return (
          <div className="subGeneralForm" key={experience.id}>
            {experiences.length > 1 && <h3> Experience {index + 1}</h3>}
            <form>
              <label>
                <span>Company Name</span>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Enter Company Name"
                  maxLength="38"
                  autoComplete="off"
                  value={experience.companyName}
                  onChange={(e) =>
                    handleExp(experience.id, "companyName", e.target.value)
                  }
                />
              </label>
              <label>
                <span>Position Title</span>
                <input
                  name="positionTitle"
                  type="text"
                  placeholder="Enter Position Title"
                  maxLength="38"
                  autoComplete="off"
                  value={experience.positionTitle}
                  onChange={(e) =>
                    handleExp(experience.id, "positionTitle", e.target.value)
                  }
                />
              </label>
              <label>
                <span>Main Responsibilities</span>
                <textarea
                  name="mainResp"
                  type="text"
                  placeholder="Enter Main Responsibilities"
                  maxLength="50"
                  autoComplete="off"
                  value={experience.mainResp}
                  onChange={(e) =>
                    handleExp(experience.id, "mainResp", e.target.value)
                  }
                />
              </label>
              <div className="yearSelector">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="startYear"
                    label={"Start Year"}
                    views={["month", "year"]}
                    value={experience.startYear}
                    onChange={(e) => handleExp(experience.id, "startYear", e)}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="endYear"
                    label={"End Year"}
                    views={["month", "year"]}
                    value={experience.endYear}
                    onChange={(e) => handleExp(experience.id, "endYear", e)}
                  />
                </LocalizationProvider>
              </div>
            </form>
            <div className="buttonGroup">
              {experiences.length > 1 && (
                <button
                  className="deleteButton"
                  onClick={() => deleteExp(experience.id)}
                >
                  Delete
                </button>
              )}
              {experiences.length < 5 && (
                <button className="addButton" onClick={addExp}>
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
