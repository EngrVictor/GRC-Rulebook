import { UserCircleIcon, PhotoIcon } from '@heroicons/react/24/outline'
export const Form = () => {
  return (
    <form>
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
             <div className="sm:col-span-3">
               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                 Rule Title
               </label>
               <div className="mt-2">
                 <input
                   id="first-name"
                   name="first-name"
                   type="text"
                   placeholder='Enter Rule Title'
                   autoComplete="given-name"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

                      <div className="sm:col-span-3">
               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
               Category
               </label>
               <div className="mt-2">
                 <select
                   id="category"
                   name="category"
                   autoComplete="category"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                 >
                   <option>-- Select --</option>
                   <option>Financial</option>
                   <option>Ethical</option>
                   <option>Procedural</option>
                 </select>
               </div>
             </div>
             <div className="col-span-full">
               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                 Rule Description
               </label>
               <div className="mt-2">
                 <textarea
                   id="about"
                   placeholder='Enter Purpose and Scope'
                   name="about"
                   rows={3}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   defaultValue={''}
                 />
               </div>
               {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
             </div>


             <div className="sm:col-span-2">
               <label htmlFor="date-issued" className="block text-sm font-medium leading-6 text-gray-900">
               Effective Date
               </label>
               <div className="mt-2">
                 <input
                   id="date-issued"
                   name="date-issued"
                   type="date"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="date-issued" className="block text-sm font-medium leading-6 text-gray-900">
               Expiration Date
               </label>
               <div className="mt-2">
                 <input
                   id="date-issued"
                   name="date-issued"
                   type="date"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-3">
               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
               Applicable To
               </label>
               <div className="mt-2">
                 <select
                   id="category"
                   name="category"
                   autoComplete="category"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                 >
                   <option>-- Select --</option>
                   <option>Financial</option>
                   <option>Ethical</option>
                   <option>Procedural</option>
                 </select>
               </div>
             </div>

             <div className="sm:col-span-3">
               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
               Approved By
               </label>
               <div className="mt-2">
                 <select
                   id="category"
                   name="category"
                   autoComplete="category"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                 >
                   <option>-- Select --</option>
                   <option>Financial</option>
                   <option>Ethical</option>
                   <option>Procedural</option>
                 </select>
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="date-issued" className="block text-sm font-medium leading-6 text-gray-900">
              Date Approved
               </label>
               <div className="mt-2">
                 <input
                   id="date-issued"
                   name="date-issued"
                   type="date"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="date-issued" className="block text-sm font-medium leading-6 text-gray-900">
               Last Updated
               </label>
               <div className="mt-2">
                 <input
                   id="date-issued"
                   name="date-issued"
                   type="date"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

                      <div className="col-span-full">
               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
               Supporting Documents
               </label>
               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                 <div className="text-center">
                   <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
                     <label
                       htmlFor="file-upload"
                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                     >
                       <span className='p-2'>Upload a file</span>
                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                     </label>
                     <p className="pl-1">or drag and drop</p>
                   </div>
                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                 </div>
               </div>
             </div>
             </div>

            <div className="mt-10 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
    </form>
      )
  }