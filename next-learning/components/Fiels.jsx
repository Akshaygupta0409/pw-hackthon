import React from 'react'

function Fiels({title}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 gap-4"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 gap-4"
        type="email"
        id="email"
        placeholder={title}
      />
    </div>


     


    
  )
}

export default Fiels