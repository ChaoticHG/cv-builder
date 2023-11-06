import "../styles/commonStyles.css";
import "../styles/PersonalDetails.css";

export default function PersonalDetails({ personalDetails, handlePersonal }) {
  return (
    <form className="generalForm generalLayout">
      <h2>Personal Details</h2>
      <label>
        <span>Full Name</span>
        <input
          className="fullName"
          name="fullName"
          type="text"
          placeholder="First and last name"
          maxLength="38"
          autoComplete="off"
          value={personalDetails.fullName}
          onChange={(e) => handlePersonal("fullName", e.target.value)}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          className="email"
          name="email"
          type="email"
          placeholder="Email"
          maxLength="20"
          autoComplete="off"
          value={personalDetails.email}
          onChange={(e) => handlePersonal("email", e.target.value)}
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          className="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="Enter phone number"
          maxLength="13"
          autoComplete="off"
          value={personalDetails.phoneNumber}
          onChange={(e) => handlePersonal("phoneNumber", e.target.value)}
        />
      </label>
      <label>
        <span>Address</span>
        <textarea
          className="address"
          name="address"
          placeholder="Enter address"
          maxLength="50"
          autoComplete="off"
          value={personalDetails.address}
          onChange={(e) => handlePersonal("address", e.target.value)}
        />
      </label>
      <label>
        <span>Summary</span>
        <textarea
          className="summary"
          name="summary"
          placeholder="Tell something about yourself"
          maxLength="100"
          autoComplete="off"
          value={personalDetails.summary}
          onChange={(e) => handlePersonal("summary", e.target.value)}
        />
      </label>
    </form>
  );
}
