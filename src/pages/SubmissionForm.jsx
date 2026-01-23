import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormHeader from "../components/form/formHeader/FormHeader";
import PersonalDetails from "../components/form/formPersonalDetails/PersonalDetails";
import PaymentDetails from "../components/form/formPaymentDetails/PaymentDetails";
import WhatsappConfirmation from "../components/form/formWhatsappConfirmation/WhatsappConfirmation";
import FormFooter from "../components/form/formFormFooter/FormFooter";
import ReferenceDetails from "../components/form/formReferenceDetails/ReferenceDetails";
import Navbar from "../components/nav/Navbar";
import heroBackground from "../assets/formHeaderHero.png";
import FormHero from "../components/form/formHero/FormHero";

const SubmissionForm = () => {
  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    if (data.paymentReceipt[0]) {
      formData.append("receipt", data.paymentReceipt[0]);
    }
  };

  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Agriculture Field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <div className="grow flex items-center justify-center py-12 md:py-0">
            <FormHero />
          </div>
        </div>
      </div>
      <div id="registerNow" className="bg-[#F4F3EF]">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormHeader />
            <PersonalDetails />
            <PaymentDetails />
            <ReferenceDetails />
            <WhatsappConfirmation />
            <FormFooter />
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SubmissionForm;
