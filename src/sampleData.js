import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const personalData = {
  fullName: "Soon Jie Kang",
  email: "soonjiekang@gmail.com",
  phoneNumber: "01112788735",
  address: "Johor Bahru, Johor, Malaysia",
  summary:
    "Experienced with multiple languages such as C++, Java, JavaScript, and Python with particular interest in building applications and creating reliable software.",
};
export const educationData = [
  {
    id: uuidv4(),
    schoolName: "Multimedia University (MMU)",
    studyTitle: "Bachelor of Computer Science",
    startYear: dayjs("2023-04"),
    endYear: dayjs("2023-04"),
  },
];
export const skillData = [
  { id: uuidv4(), text: "JavaScript" },
  { id: uuidv4(), text: "React" },
  { id: uuidv4(), text: "Node.js" },
  { id: uuidv4(), text: "Python" },
  { id: uuidv4(), text: "Java" },
  { id: uuidv4(), text: "C++" },
];
export const expData = [
  {
    id: uuidv4(),
    companyName: "Hoyoverse",
    positionTitle: "Senior Software Engineer",
    mainResp:
      "-Overseeing multiple projects\n-Improving software to have better quality\n-Lead development team in the latest game released",
    startYear: dayjs("2021-01"),
    endYear: dayjs("2023-11"),
  },
  {
    id: uuidv4(),
    companyName: "Larian Studio",
    positionTitle: "Junior Software Engineer",
    mainResp:
      "-Creation of company webpage using react\n-Participated in game engine design\n-Presented monthly company performance review",
    startYear: dayjs("2021-01"),
    endYear: dayjs("2023-11"),
  },
  {
    id: uuidv4(),
    companyName: "Valve",
    positionTitle: "Intern",
    mainResp:
      "-Participated in creation of source engine\n-Conducted test driven development for existing game\n-Improved company performance reporting system",
    startYear: dayjs("2021-01"),
    endYear: dayjs("2023-11"),
  },
];
