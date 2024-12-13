import React from 'react'

const Contact = () => {
  return (
    <div className="p-8 mt-8 max-w-lg mx-auto">
      <h1 className="text-4xl text-gray-400 sm:text-4xl font-bold mb-4">
        Contact Form
      </h1>
      <form>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="name"
              className="leading-7 py-4 text-lg text-gray-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required=""
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="email"
              className="leading-7 py-4 text-lg text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 py-4 text-lg text-gray-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required=""
              className=" w-full textarea textarea-bordered h-44"
            ></textarea>
          </div>
        </div>
        <div className="p-2 w-full flex justify-center">
          <button type="submit" className="flex btn btn-primary btn-md">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact