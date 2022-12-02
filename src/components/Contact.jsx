import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 z-10"
    >
      <form
        method="post"
        action="https://getform.io/f/d7ced37f-8550-4ac1-ae03-cd6eefc5cf59"
        className=" flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#b9c9ff] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or contact via email - tajdinov@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[ccd6f6]"
          name="message"
          rows="8"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#b9c9ff] hover:border-[#b9c9ff] px-4 py-3 my-8 mx-auto flex items-center z-10">
          Contact
        </button>
      </form>
    </div>
  );
};

export default Contact;
