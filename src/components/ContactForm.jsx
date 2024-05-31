import React from "react";

import Input from "./Input";
import Button from "./Button";

export default function ContactForm() {
  const MAX_AMOUNT_LETTERS_FOR_INPUT = 5;

  const isFormValid = (form) => {
    if (form.firstName.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT)
      return false;
    if (form.lastName.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT) return false;
    if (form.email.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT) return false;
    if (form.phoneNumber.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT)
      return false;
    return true;
  };

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (!isFormValid(form)) {
      alert("Form is not valid. Please check the inputs.");
      return;
    }

    const formData = new FormData(form);
    const currentDate = new Date().toISOString().split("T")[0];
    formData.append("date", currentDate);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((html) => {
        alert("success");
      });
  };

  return (
    <form
      action="https://sheetdb.io/api/v1/mh27ctov5fb2k"
      className="mt-12"
      onSubmit={handleContactFormSubmit}
      method="post"
    >
      <div className="mb-6 flex flex-row gap-x-4 flex-wrap">
        <Input
          type="text"
          name="firstName"
          placeholder="Ім’я"
          id="firstNameInput"
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Прізвище"
          id="lastNameInput"
        />
      </div>
      <div className="mb-6">
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Електронна пошта"
          className="w-full"
        />
      </div>
      <div className="mb-6">
        <Input
          type="text"
          name="phoneNumber"
          id="phoneNumberInput"
          placeholder="Номер телефону"
          className="w-full"
        />
      </div>
      <Button text="Зареєструватися" type="submit" />
    </form>
  );
}
