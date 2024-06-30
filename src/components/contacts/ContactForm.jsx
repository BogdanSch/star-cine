import React from "react";
import { useState } from "react";

import Modal from "../modals/Modal";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";

const MAX_AMOUNT_LETTERS_FOR_INPUT = 3;
const VITE_SHEET_DB_API = import.meta.env.VITE_SHEET_DB_API;

const isFormValid = (form) => {
  const errors = {
    errorsCount: 0,
  };
  if (
    form.firstName.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT ||
    form.lastName.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT
  ) {
    errors["initials"] = "Будь ласка, вкажіть правильні прізвище та ім'я!";
    errors.errorsCount += 1;
  }
  if (form.email.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT) {
    errors["email"] = "Будь ласка, вкажіть дійсну електронну адресу!";
    errors.errorsCount += 1;
  }
  if (form.phoneNumber.value.length < MAX_AMOUNT_LETTERS_FOR_INPUT) {
    errors["phoneNumber"] = "Будь ласка, вкажіть дійсний номер телефону!";
    errors.errorsCount += 1;
  }
  return errors;
};

export default function ContactForm() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const errors = isFormValid(form);
    if (errors.errorsCount > 0) {
      setFormErrors(errors);
      return;
    }

    const formData = new FormData(form);
    const filteredPhoneNumber = `"${form.phoneNumber.value}"`;
    formData.set("phoneNumber", filteredPhoneNumber);
    const currentDate = new Date().toISOString().split("T")[0];
    formData.append("date", currentDate);

    try {
      setShowConfirmModal(true);
      fetch(form.action, {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok) {
          console.log("Success!");
          setShowConfirmModal(true);
          form.reset();
        } else {
          console.log("Error!");
          setShowErrorModal(true);
          form.reset();
        }
      });
    } catch (error) {
      console.error(error);
      setShowErrorModal(true);
      form.reset();
    }
  };

  return (
    <>
      <form
        action={VITE_SHEET_DB_API}
        className="mt-12"
        onSubmit={handleContactFormSubmit}
        method="post"
        netlify
      >
        <div className="mb-6">
          <div className="flex flex-row gap-x-4 gap-y-6 flex-wrap mb-1">
            <Input
              type="text"
              name="firstName"
              placeholder="Ім’я"
              id="firstNameInput"
              className="flex-1"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Прізвище"
              id="lastNameInput"
              className="flex-1"
            />
          </div>
          <Label
            htmlFor="firstNameInput"
            className="text-red-500"
            message={formErrors.initials?.length > 0 ? formErrors.initials : ""}
          />
        </div>

        <div className="mb-6">
          <Input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Електронна пошта"
            className="w-full mb-1"
          />
          <Label
            htmlFor="emailInput"
            className="text-red-500"
            message={formErrors.email?.length > 0 ? formErrors.email : ""}
          />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumberInput"
            placeholder="Номер телефону"
            className="w-full mb-1"
          />
          <Label
            htmlFor="phoneNumberInput"
            className="text-red-500"
            message={
              formErrors.phoneNumber?.length > 0 ? formErrors.phoneNumber : ""
            }
          />
        </div>
        <Button text="Зареєструватися" type="submit" />
      </form>
      <Modal
        id="successModal"
        modalTitle="Confirmation message"
        modalContent="Your request was successfully sent!"
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
      />
      <Modal
        id="errorModal"
        modalTitle="Error message"
        modalContent="There was an error, please try again later!"
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
      />
    </>
  );
}
