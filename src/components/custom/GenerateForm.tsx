import React, { useEffect, useState } from "react";
import {
  ButtonCotinueStyled,
  ButtonSixStyled,
} from "../syledComponents/Buttons.styled";
import { Link } from "react-router-dom";
import { generateRandomUsername } from "../../utils/generateUsername";

type Props = {
  username: string;
  setUsername: (e: any) => void;
  usernameError: boolean;
  setUsernameError: (usernameError: boolean) => void;
};

const GenerateForm = ({
  username,
  setUsername,
  usernameError,
  setUsernameError,
}: Props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUsernameError(true);
  }, []);

  useEffect(() => {
    if (user) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  }, [user]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    setUsername(user);
  };

  const createRandomUserName = (e: any) => {
    e.preventDefault();
    setUsername(generateRandomUsername());
  };

  return (
    <form
      className="w-full  sm:max-w-[50%]  mx-auto flex flex-col items-start text-start gap-2
      "
      action="
"
      onSubmit={submitForm}
    >
      <div className="w-full h-fit flex flex-col gap-8 items-start">
        <input
          className={`w-full ${usernameError && "alert"}`}
          id="username"
          name="username"
          type="text"
          value={user}
          placeholder="Create Your Avatar Name"
          onChange={handleChange}
          // onKeyDown={(e) => {
          //   // Use onKeyDown for wider browser compatibility
          //   if (e.key === "Enter") {
          //     // Your form submission logic here (likely involving a function call)
          //     submitForm(e); // Example function call (replace with your actual logic)
          //   }
          // }}
        />

        <ButtonCotinueStyled className="" type="submit">
          Continue
        </ButtonCotinueStyled>
        <div className="w-full flex items-center justify-center">
          <button
            className="text-center text-white para2"
            onClick={createRandomUserName}
          >
            Skip
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenerateForm;
