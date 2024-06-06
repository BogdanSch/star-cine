import React from "react";
import { useState } from "react";

import Modal from "../modals/Modal";
import Input from "../Input";
import Button from "../Button";

const MAX_AMOUNT_LETTERS_FOR_INPUT = 2;
const CONTACT_API_URL = "https://sheetdb.io/api/v1/mh27ctov5fb2k";

export default function ContactForm() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

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
        action={CONTACT_API_URL}
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
