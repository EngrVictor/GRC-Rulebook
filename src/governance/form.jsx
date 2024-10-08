import { UserCircleIcon, PhotoIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { useState } from 'react';
import Swal from "sweetalert2"


export const Form = () => {
  const [details, setDetails] = useState({})

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(details);
    

    try {
      const url = 'https://grc-rulebook-backend.onrender.com'
      const token = `Bearer ${localStorage.getItem('access_token')}`

      const response = await axios.post(`${url}/api/rules`, details, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })

      Swal.fire({
        icon: "success",
        title: "Rule created successfull",
        text: response.msg
    });
      navigate('/')
  } catch (error) {
      console.log(error);
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.msg
      });
  }

  };
  
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
             <div className="sm:col-span-3">
               <label htmlFor="rule-title" className="block text-sm font-medium leading-6 text-gray-900">
                 Rule Title
               </label>
               <div className="mt-2">
                 <input
                   id="rule-title"
                   name="rule-title"
                   type="text"
                   placeholder='Enter Rule Title'
                   autoComplete="rule-title"
                   value={details.ruleTitle}
                   onChange={e => {
                    setDetails(prev => {
                      return {...prev, ruleTitle: e.target.value}
                    })
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

                      <div className="sm:col-span-3">
               <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
               Category
               </label>
               <div className="mt-2">
                 <select
                   id="category"
                   name="category"
                   autoComplete="category"
                   value={details.category}
                   onChange={e => {
                    setDetails(prev => {
                      return {...prev, category: e.target.value}
                      })
                   }}
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
               <label htmlFor="rule-description" className="block text-sm font-medium leading-6 text-gray-900">
                 Rule Description
               </label>
               <div className="mt-2">
                 <textarea
                   id="rule-description"
                   placeholder='Enter Purpose and Scope'
                   name="rule-description"
                   rows={3}
                   value={details.ruleDescription}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, ruleDescription: e.target.value}
                    })
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   defaultValue={''}
                 />
               </div>
               {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
             </div>


             <div className="sm:col-span-2">
               <label htmlFor="effective-date" className="block text-sm font-medium leading-6 text-gray-900">
               Effective Date
               </label>
               <div className="mt-2">
                 <input
                   id="effective-date"
                   name="effective-date"
                   type="date"
                   value={new Date().toLocaleDateString('en-CA')}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, effectiveDate: e.target.value}
                    })
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-900">
               Expiration Date
               </label>
               <div className="mt-2">
                 <input
                   id="expiration-date"
                   name="expirationDate"
                   type="date"
                   value={details.expirationDate}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, expirationDate: e.target.value}
                    })
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-3">
               <label htmlFor="applicable-to" className="block text-sm font-medium leading-6 text-gray-900">
               Applicable To
               </label>
               <div className="mt-2">
                 <select
                   id="applicable-to"
                   name="applicable-to"
                   autoComplete="applicable-to"
                   value={details.applicableTo}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, applicableTo: e.target.value}
                    })
                   }}
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
               <label htmlFor="approved-by" className="block text-sm font-medium leading-6 text-gray-900">
               Approved By
               </label>
               <div className="mt-2">
                 <select
                   id="approved-by"
                   name="approved-by"
                   autoComplete="approved-by"
                   value={details.approvedBy}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, approvedBy: e.target.value}
                    })
                   }}
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
               <label htmlFor="date-approved" className="block text-sm font-medium leading-6 text-gray-900">
              Date Approved
               </label>
               <div className="mt-2">
                 <input
                   id="date-approved"
                   name="date-approved"
                   type="date"
                   value={details.dateApproved}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, dateApproved: e.target.value}
                    })
                   }}
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="sm:col-span-2">
               <label htmlFor="last-updated" className="block text-sm font-medium leading-6 text-gray-900">
               Last Updated
               </label>
               <div className="mt-2">
                 <input
                   id="last-updated"
                   name="last-updated"
                   type="date"
                   value={details.lastUpdated}
                   onChange={e => {
                    setDetails(prev => {
                      return  {...prev, lastUpdated: e.target.value}
                    })
                   }}
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
                       <span className='p-2'>Upload Supporting Documents</span>
                       <input id="file-upload" name="document" type="file" className="sr-only" multiple/>
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