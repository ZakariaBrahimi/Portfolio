import {contactUs} from '../assets/contactUs.json'
import Lottie from "lottie-react";


const Contact = () => {
  return (
    <section className="my-24 flex flex-col gap-3">
      <h1 className="text-title text-4xl font-semibold flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
          <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
        </svg>

        <span>Contact us</span>
      </h1>
      <p className="text-subtitle mb-12 xl:mb-0">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex items-center justify-between">
        <form className="xl:w-6/12 w-full flex flex-col gap-6 items-start">
          <div className="flex gap-6 items-center w-full">
            <label className="text-subtitle font-semibold w-40" htmlFor="email">Email Address:</label>
            <input className="bg-[#3f3f4626] hover:border-darkGreen transition duration-500 outline-none focus:border-darkGreen border-borderColor border w-full px-2 py-2 rounded-xl" required type="email" name="" id="email" />
          </div>

          <div className="flex gap-6 items-center w-full" style={{ marginTop: "24px" }}>
            <label className="text-subtitle w-40 font-semibold" htmlFor="message">Your message:</label>
            <textarea className="bg-[#3f3f4626] hover:border-darkGreen transition duration-500 outline-none focus:border-darkGreen border-borderColor border w-full px-2 py-2 rounded-xl" required name="" id="message"></textarea>
          </div>

          <button id='submitBtn' className="font-semibold text-title hover:scale-95 transition-transform duration-300 border-borderColor border px-8 text-center py-2 mt-10 rounded-lg">Submit</button>
        </form>
        <Lottie
          className="w-[25rem] bg-green-3 hidden xl:block"
          animationData={contactUs}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Contact;
