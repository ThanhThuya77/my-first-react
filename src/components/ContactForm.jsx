import { useActionState, useId } from "react";
import { SubmitButton } from "./SubmitButton";

const UncontrolledInput = ({
  label = "",
  name = "",
  isValid = true,
  errorText = "",
}) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" name={name} />
      {!isValid && <p style={{ color: "red" }}>{errorText}</p>}
    </div>
  );
};

const defaultContactActionForm = {
  isAllFieldsValid: false,
  error: null,
  success: false,
  name: {
    value: "",
    isValid: true,
  },
  email: {
    value: "",
    isValid: true,
  },
};

const ContactAction = async (previousState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  try {
    await new Promise((resolve, reject) => setTimeout(resolve, 1500));
  } catch (err) {
    return {
      ...defaultContactActionForm,
      error: err instanceof Error ? err.message : "Something went wrong.",
      isError: true,
      success: false,
    };
  }

  return {
    name: {
      value: name,
      isValid: name.length >= 10,
    },
    email: {
      value: email,
      isValid: email.length >= 10,
    },
    isAllFieldsValid: !(name.length >= 10 && email.length >= 10),
    success: true,
    error: null,
  };
};

export const ContactForm = () => {
  const [state, actionForm, isPending] = useActionState(
    ContactAction,
    defaultContactActionForm,
  );
  return (
    <div style={{ padding: 16, border: "1px solid yellow" }}>
      <form action={actionForm}>
        <UncontrolledInput
          label="Name:"
          name="name"
          isValid={state.name?.isValid}
          errorText="Name: at least 10 characters"
        />
        <UncontrolledInput
          label="Email:"
          name="email"
          isValid={state.email?.isValid}
          errorText="Email: at least 10 characters"
        />
        <UncontrolledInput label="Message:" name="message" />
        <SubmitButton />
        {state.success && !state.isAllFieldsValid && (
          <p>
            Thanks, {state.name?.value}! We'll reply to {state.email?.value}.
          </p>
        )}
        {!!state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </form>
    </div>
  );
};

/*
Check that the fields reset automatically after a successful submit, but not after an error. Explain what you saw

I saw that it always resets the state for both success or failed state.
So I cannot get your idea ", but not after an error. Explain what you saw"
Could you help me ?


// a
const [city, setCity] = useState();
<input value={city} onChange={e => setCity(e.target.value)} />
missing type="text"

// b
<input value={name} />
using value => controlled input => should have onChange function and state to update the value.

// c
const [qty, setQty] = useState(1);
<input type="number" value={qty} onChange={e => setQty(e.target.value)} />
<p>Total: {qty * 10 + 5}</p>   // works... but what about qty + 1?

coersion => the type of the qty is string, we should use Number() to parse it from string to number
before calculating the total
for times : I think it will try to parse the qty from string to number
for plus: I think it will try to parse 1 to string.
it will convert the number 1 into string then combine them.


// d
<form onSubmit={handleSubmit}>
  <input name="q" />
  <button onClick={() => setQuery("")}>Clear</button>
  <button>Search</button>
</form>
Clear button should have type="button" to prevent auto-assign it to submit button.
Search button should have type="submit" to be explicit and clearer.

// e
function Field({ label }) {
  return (<><label htmlFor="field">{label}</label><input id="field" /></>);
}
// used 3 times on the same page
Should use useId() to get the unique ID for htmlFor and id, if not when clicking the label of the second or third field will focus on the first one.


7. Thinking question: when would you choose a controlled input over a form Action with FormData? Give one example of each.
When we need the value while typing to validate, count characters, search as you type
e.g: validate email, min and max length, calculate number and format currency.
When you use uncontrolled form for a simple form like a new letter, simple contact

*/
