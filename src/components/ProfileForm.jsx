import { Fragment, useId, useState } from "react";

const levelState = ["Beginner", "Intermediate", "Advanced"];

const InputComponent = ({
  type = "text",
  label = "",
  name = "",
  value = "",
  errorText = "",
  required = false,
  isValid = true,
  isTouched = false,
  onChange = ({ name = "", value = "", isTouched = false }) => {},
}) => {
  const id = useId();
  const commonProps = {
    id,
    name,
    value,
    onChange: (e) => onChange({ name, value: e.target.value }),
    onBlur: () => onChange({ name, value }),
  };
  //   console.log("log", {
  //     label,
  //     name,
  //     value,
  //     errorText,
  //     required,
  //     isValid,
  //     isTouched,
  //   });
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea {...commonProps} required={required} />
      ) : (
        <input {...commonProps} type={type} required={required} />
      )}
      {isTouched && !isValid && <p style={{ color: "red" }}>{errorText}</p>}
    </div>
  );
};

const CheckboxComponent = ({
  label = "",
  name = "",
  checked = false,
  onChange = ({ name = "", checked = false }) => {},
}) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange({ name, checked: e.target.checked })}
      />
    </div>
  );
};

const SelectComponent = ({
  label = "",
  name = "",
  value = "",
  options = [],
  onChange = ({ name = "", value = "" }) => {},
}) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange({ name, value: e.target.value })}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const RadioComponent = ({
  label = "",
  name = "",
  value = "",
  listRadio = [],
  onChange = ({ name = "", value = "" }) => {},
}) => {
  const id = useId();
  return (
    <div>
      <p>{label}</p>
      {listRadio.map((item) => (
        <Fragment key={item}>
          <label htmlFor={id}>{item}</label>
          <input
            type="radio"
            id={id}
            name={item}
            value={item}
            checked={value === item}
            onChange={(e) => onChange({ name, value: item })}
          />
        </Fragment>
      ))}
    </div>
  );
};
const defaultFormData = {
  name: { value: "", isTouched: false, isValid: true },
  email: { value: "", isTouched: false, isValid: true },
  level: { value: "Beginner", isTouched: false, isValid: true },
  language: { value: "", isTouched: false, isValid: true },
  bio: { value: "", isTouched: false, isValid: true },
  openToWork: { value: false, isTouched: false, isValid: true },
};

export const ProfileForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [profileData, setProfileData] = useState({
    ...defaultFormData,
    isSubmit: false,
  });

  const handleFormChange = ({ name = "", value = "", checked = false }) => {
    let valueForm = value;
    let isValid = true;
    if (name === "openToWork") {
      valueForm = checked;
    } else if (name === "bio" && value.length > 100) {
      valueForm = formData.bio;
    } else if (name === "name" && value.length <= 2) {
      isValid = false;
    } else if (name === "email" && !value.includes("@")) {
      isValid = false;
    }
    console.log("name:", name, "valueForm:", valueForm);
    setFormData((prev) => ({
      ...prev,
      [name]: { value: valueForm, isTouched: true, isValid },
    }));
    setProfileData({ ...profileData, isSubmit: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({ ...formData, isSubmit: true });
    setFormData(defaultFormData);
  };

  const isInvalid = Object.values(formData).some((data) => !data?.isValid);

  return (
    <div style={{ padding: 16, border: "1px solid black" }}>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="Name:"
          name="name"
          value={formData.name?.value}
          isValid={formData.name?.isValid}
          isTouched={formData.name?.isTouched}
          required
          errorText="At least 2 characters"
          onChange={handleFormChange}
        />
        <InputComponent
          label="Email:"
          name="email"
          value={formData.email?.value}
          isValid={formData.email?.isValid}
          isTouched={formData.email?.isTouched}
          errorText="Must contain @"
          onChange={handleFormChange}
        />
        <RadioComponent
          label="Language:"
          name="language"
          value={formData.language?.value}
          onChange={handleFormChange}
          listRadio={["JS", "Python"]}
        />
        <p>{`Max length of Bio: ${formData.bio?.value?.length}`}</p>
        <InputComponent
          type="textarea"
          label="Bio:"
          name="bio"
          value={formData.bio?.value}
          onChange={handleFormChange}
        />
        <SelectComponent
          label="Level:"
          name="level"
          value={formData.level?.value}
          options={["Beginner", "Intermediate", "Advanced"]}
          onChange={handleFormChange}
        />
        <CheckboxComponent
          label="Open to work:"
          name="openToWork"
          checked={formData.openToWork?.value}
          onChange={handleFormChange}
        />
        <button type="submit" disabled={isInvalid}>
          Submit
        </button>
        {profileData.isSubmit && <p>✅ Saved!</p>}
        <div>
          <p>Name*: {profileData.name?.value}</p>
          <p>Email: {profileData.email?.value}</p>
          <p>Level: {profileData.level?.value}</p>
          <p>Language: {profileData.language?.value}</p>
          <p>Bio: {profileData.bio?.value}</p>
          <p>Open to Work: {profileData.openToWork?.value ? "Yes" : "No"}</p>
        </div>
      </form>
    </div>
  );
};
