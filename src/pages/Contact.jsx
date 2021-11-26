import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  likesBears: false,
  favoriteBearColor: "",
  email: "",
};

function Contact() {
  const [formState, setFormState] = useState(initialFormState);
  // useEffect(() => {
  //   console.log(formState);
  // }, [formState]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    window.localStorage.setItem("Myform", JSON.stringify(formState));
    setFormState(initialFormState);

    // console.log("Name: ", e.target.name.value);
    // console.log("Likse bears: ", e.target.likesBears.checked);
    // console.log("Favorite bear color: ", e.target.favoriteBearColor.value);
    // console.log("Email: ", e.target.email.value);
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setFormState((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "likesBears":
        setFormState((prev) => ({ ...prev, likesBears: e.target.checked }));
        break;
      case "favoriteBearColor":
        setFormState((prev) => ({
          ...prev,
          favoriteBearColor: e.target.value,
        }));
        break;
      case "email":
        setFormState((prev) => ({
          ...prev,
          email: e.target.value,
        }));
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <h1>Contact page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          maxWidth: "600px",
          gap: "2rem",
        }}
      >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="likesBears">Do you like bears: </label>
          <input
            type="checkbox"
            name="likesBears"
            checked={formState.likesBears}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="favoriteBearColor">Favorite bear color: </label>
          <input
            type="color"
            name="favoriteBearColor"
            value={formState.favoriteBearColor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
