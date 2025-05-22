import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { sendEmail } from "../API/SendEmail";

const Form = ({ setIsRegistered, setSuccessMessage, downloadRef }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = firstName && lastName && mobile && email;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await sendEmail({ firstName, lastName, mobile, whatsapp, email });
      downloadRef?.current?.scrollIntoView({ behavior: "smooth" });

      setSuccessMessage("Your request has been sent successfully.");
      setIsRegistered(true);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#2729630D] p-4 md:px-20 py-11 my-20 w-full max-w-4xl border border-[#E35F27] md:rounded-2xl space-y-8">
      <h2 className="text-2xl text-[#E35F27] font-normal">
        Register To Download
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border border-[#D9D9D9] px-4 py-2"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-[#D9D9D9] px-4 py-2"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <PhoneInput
            placeholder="  Enter mobile number"
            value={mobile}
            onChange={setMobile}
            defaultCountry="AE"
            className="w-full border pl-3.5 border-[#D9D9D9] rounded-md  text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-[#D9D9D9] px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            WhatsApp Number 
          </label>
          <PhoneInput
            placeholder="  Enter WhatsApp number"
            value={whatsapp}
            onChange={setWhatsapp}
            defaultCountry="AE"
            className="w-full border pl-3.5 border-[#D9D9D9] rounded-md text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-end justify-end md:col-span-1">
<button
  type="submit"
  disabled={isLoading || !isFormValid}
  className={`w-full bg-[#1C1C54] text-white px-8 py-3 rounded-md font-medium transition ${
    isLoading || !isFormValid ? "opacity-50 cursor-not-allowed" : "hover:bg-[#14143f]"
  }`}
>
  {isLoading ? "Submitting..." : "Submit"}
</button>

        </div>
      </form>
    </div>
  );
};

export default Form;
