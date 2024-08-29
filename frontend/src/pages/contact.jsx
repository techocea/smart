import React from "react";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col py-16 items-center justify-center bg-slate-100">
      <div className="flex flex-col lg:max-w-xl w-full max-w-xs text-center items-center  gap-y-4  justify-center">
        <h1 className="font-bold text-4xl lg:text-5xl  text-primary">
          Speak with our experts
        </h1>
        <p className="text-grey">
          To get in touch with our expert team, simply leave your details below
          and we’ll call you for a FREE consultation.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
