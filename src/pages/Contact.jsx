import { useState } from "react";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import ContactImg from "/public/images/contact-me-cartoon.png";

export default function Contact() {
  const EMAIL_TOKEN = "5ecfee2f-cae1-4260-bdbc-07d8e236d56f";

  const sendDataArr = ["Send Message", "Submitting", "Sent", "Error"];

  const initFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    // include an \"access_key\" field during fetching
    access_key: EMAIL_TOKEN,
  };

  const [formDetails, setFormDetails] = useState(initFormDetails);
  const [status, setStatus] = useState({});
  const [sendDataIdx, setSendDataIdx] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendDataIdx(1);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    const result = await response.json();

    if (result.success) {
      setStatus({ success: true, message: "Message Sent Successfully!" });
      setSendDataIdx(2);
    } else {
      setStatus({
        success: false,
        message: "Somethging went wrong, please try again later! ",
      });
      setSendDataIdx(3);
    }

    setFormDetails(initFormDetails);
  };

  const onFormUpdate = (action, payload) => {
    setFormDetails({ ...formDetails, [action]: payload });
  };

  return (
    <div className="container mx-auto text-white" >
      <SectionHeader
        title="Contact Me"
        subtitle="Feel free to email or text me"
        id="contact"
      />

      <div className="contact-area flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-0">
        <div className="contact-info col-span-3 col-start-1 flex flex-col gap-6 xl:col-start-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">location_on</span>
            <span> Toronto, Canada</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            <span> kyrie807782352@gmail.com </span>
          </div>
          <div>
            <img
              src={ContactImg}
              alt="cartoon contact me image"
              className="hidden w-[240px] rounded-full lg:block "
            />
          </div>
        </div>

        <form
          className="contact-form col-span-8 col-start-5 flex flex-col items-center gap-4 text-slate-800 xl:col-span-7"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full  rounded-lg bg-slate-100 px-3 py-2 placeholder-gray-500 focus:bg-slate-300 focus:font-bold focus:placeholder-gray-700"
            type="text"
            name="fname"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
            required
          />
          <input
            className="w-full rounded-lg bg-slate-100 px-3 py-2 placeholder-gray-500 focus:font-bold focus:placeholder-gray-700"
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
            required
          />
          <input
            className="w-full rounded-lg bg-slate-100 px-3 py-2 placeholder-gray-500 focus:font-bold focus:placeholder-gray-700"
            type="email"
            name="email"
            placeholder="Email"
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
            required
          />
          <input
            className="w-full rounded-lg bg-slate-100 px-3 py-2 placeholder-gray-500 focus:font-bold focus:placeholder-gray-700"
            type="phone"
            name="phone"
            placeholder="Phone"
            value={formDetails.phone}
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
          <textarea
            className="h-36 w-full rounded-lg bg-slate-100 px-3 py-2 placeholder-gray-500 focus:font-bold focus:placeholder-gray-700 lg:h-44"
            name="message"
            placeholder="Leave your message here..."
            value={formDetails.message}
            onChange={(e) => onFormUpdate("message", e.target.value)}
            required
          />
          <Button type="primary-slate-800" addClass=" w-full lg:w-fit ">
            <div className="flex items-center justify-center gap-1 font-extrabold">
              <span className=" text-lg ">{sendDataArr[sendDataIdx]}</span>
              {sendDataIdx === 0 && (
                <span className="material-symbols-outlined">send</span>
              )}
              {sendDataIdx === 1 && (
                <span className="material-symbols-outlined">hourglass_top</span>
              )}
              {sendDataIdx === 2 && (
                <span className="material-symbols-outlined">check_circle</span>
              )}
              {sendDataIdx === 3 && (
                <span className="material-symbols-outlined">block</span>
              )}
            </div>
          </Button>

          {status?.success && (
            <span className="text-green-500">{status.message}</span>
          )}
          {!status?.success && (
            <span className="text-red-500">{status.message}</span>
          )}
        </form>
      </div>
    </div>
  );
}
