import React from 'react'

export default function Input_field({name, type}) {
  return (
      <div className="relative bg-inherit">
        <input
          type={type}
          id="username"
          name="username"
          className="p-4 rounded mb-4 w-full peer h-10 text-black placeholder-transparent focus:ring-sky-600 focus:outline-none focus:border-rose-600"
          placeholder="Type inside me"
        />
        <label
          htmlFor="username"
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-500 peer-focus:font-bold peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-600 peer-focus:text-sm transition-all"
        >
          {name}
        </label>
    </div>
  )
}
