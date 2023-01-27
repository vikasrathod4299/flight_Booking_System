import React from 'react'
import {useForm } from "react-hook-form";

const PassengersDetails = ({searchParams, setPassengers, passengers, setToggle}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        setPassengers(data)
        setToggle('seats')
    };
  

  return (
    <div className="bg-slate-100 rounded-md shadow-lg px-8 py-4 w-[700px]">
    <code className="text-black">Passengers Details</code>
    <form
      className="flex flex-col gap-y-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="accordion w-full" id="accordionExampleadult">
        {Array(parseInt(searchParams.adult))
          .fill(null)
          .map((value, index) => {
            return (
              <div
                key={index}
                className="accordion-item bg-white border border-gray-200"
              >
                <h2
                  className="accordion-header mb-0"
                  id={`heading${index}`}
                >
                  <button
                    className="
                                  accordion-button
                                  relative
                                  flex
                                  items-center
                                  w-full
                                  py-4
                                  px-5
                                  text-base text-gray-800 text-left
                                  bg-white
                                  border-0
                                  rounded-none
                                  transition
                                  focus:outline-none
                                "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}`}
                  >
                    Adult {index + 1}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse `} 
                  aria-labelledby={`#heading${index}`}
                  data-bs-parent="#accordionExampleadult"
                >
                  <div className="flex justify-around accordion-body py-4 px-5">
                    <code>Name</code>
                    <div className="flex h-8 gap-x-2">
                      <div className="flex flex-col">
                        <select defaultValue={passengers[`adult${index + 1}title`] || ""} {...register(`adult${index + 1}title`,{required: true})}>
                          <option value={''} disabled>
                            Title
                          </option>
                          <option value={1}>Mr</option>
                          <option value={0}>Ms</option>
                        </select>
                        {errors[`adult${index + 1}title`] && (
                          <code className="text-xs text-red-500">
                            *******
                          </code>
                        )}
                        
                      </div>
                    </div>
                    <div className="flex gap-x-4">
                      <div className="flex flex-col">
                        <input
                          className="outline-blue-400 border-2 rounded-md w-52"
                          type="text"
                          id={`adult${index + 1}firstName`}
                          name={`adult${index + 1}firstName`}
                          {...register(
                            `adult${index + 1}firstName`,
                            {
                              required: true,
                            }
                          )}
                          placeholder="First Name"
                          autoComplete='off'
                          defaultValue={passengers[`adult${index + 1}firstName`]||''}
                        />
                        {errors[`adult${index + 1}firstName`] && (
                          <code className="text-xs text-red-500">
                            *First Name is required
                          </code>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <input
                          className="outline-blue-400 border-2 rounded-md w-52"
                          type="text"
                          id={`adult${index + 1}lastName`}
                          name={`adult${index + 1}lastName`}
                          {...register(
                            `adult${index + 1}lastName`,
                            {
                              required: true,
                            }
                          )}
                          placeholder="Last Name"
                          autoComplete='off'
                          defaultValue={passengers[`adult${index + 1}lastName`]||''}
                        />
                        {errors[`adult${index + 1}lastName`] && (
                          <code className="text-xs text-red-500">
                            *Last Name is required
                          </code>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="accordion w-full" id="accordionExamplechild">
        {Array(parseInt(searchParams.child))
          .fill(null)
          .map((value, index) => {
            return (
              <div
                key={index}
                className="accordion-item bg-white border border-gray-200"
              >
                <h2
                  className="accordion-header mb-0"
                  id={`heading${index}child`}
                >
                  <button
                    className="
                                  accordion-button
                                  relative
                                  flex
                                  items-center
                                  w-full
                                  py-4
                                  px-5
                                  text-base text-gray-800 text-left
                                  bg-white
                                  border-0
                                  rounded-none
                                  transition
                                  focus:outline-none
                                "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}child`}
                    aria-expanded="true"
                    aria-controls={`collapse${index}child`}
                  >
                    Child {index + 1}
                  </button>
                </h2>
                <div
                  id={`collapse${index}child`}
                  className={`accordion-collapse collapse `}
                  aria-labelledby={`#heading${index}child`}
                  data-bs-parent="#accordionExamplechild">

                  <div className="flex justify-around accordion-body py-4 px-5">
                    <code>Name</code>
                    <div className="flex gap-x-2">
                      <div className="flex flex-col">
                        <select defaultValue={passengers[`child${index + 1}title`]||""} {...register(`child${index + 1}title`,{required: true})}>
                          <option value={""} disabled>
                            Title
                          </option>
                          <option value={1}>Mr</option>
                          <option value={0}>Ms</option>
                        </select>
                        {errors[`child${index + 1}title`] && (
                          <code className="text-xs text-red-500">
                              *******
                          </code>
                          )}
                      </div>
                    </div>
                    <div className="flex gap-x-4">
                      <div className="flex flex-col">
                        <input
                          className="outline-blue-400 border-2 rounded-md w-52"
                          type="text"
                          placeholder="First Name"
                          id={`child${index + 1}firstName`}
                          name={`child${index + 1}firstName`}
                          {...register(
                            `child${index + 1}firstName`,
                            {
                              required: true,
                            }
                          )}
                          autoComplete='off'
                          defaultValue={passengers[`child${index + 1}firstName`]||''}
                        />

                        {errors[`child${index + 1}firstName`] && (
                          <code className="text-xs text-red-500">
                            *Last Name is required
                          </code>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <input
                          className="outline-blue-400 border-2 rounded-md w-52"
                          type="text"
                          placeholder="Last Name"
                          id={`child${index + 1}lastName`}
                          name={`child${index + 1}lastName`}
                          {...register(
                            `child${index + 1}lastName`,
                            {
                              required: true,
                            }
                          )}
                          autoComplete='off'
                          defaultValue={passengers[`child${index + 1}lastName`]||''}
                        />
                        {errors[`child${index + 1}lastName`] && (
                          <code className="text-xs text-red-500">
                            *Last Name is required
                          </code>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          <code className="text-sm text-slate-600">
            Phone Number:
          </code>
          <input 
            className="p-2 rounded-md"
            type={'number'}
            placeholder="Phone number"
            id={`phone`}
            name={`phone`}
            defaultValue={passengers.phone||''}
            {...register('phone',
            {
            required: true,                              
            minLength:{
              value:10,
            },
            maxLength:{value:10}})}
          />
          {errors.phone?.type === 'required' && (
            <code className="text-xs text-red-500">
              *Phone number is required
            </code>
          )}
          {errors.phone?.type === "minLength" && (
            <code className="text-xs text-red-500">
              *Enter Valid Number
            </code>
          )}
          {errors.phone?.type === "maxLength" && (
            <code className="text-xs text-red-500">
              *Enter Valid Number
            </code>
          )}
        </div>
        <div className="flex flex-col">
          <code className="text-sm text-slate-600">Email:</code>
          <input
            type={"email"}
            className="p-2 rounded-md"
            placeholder="Enter Email"
            defaultValue={passengers.email||''}
            {...register('email',{required: true})}
          />
          {errors.email && (
            <code className="text-xs text-red-500">
              *Email is required
            </code>
          )}
          <code className="text-xs font-extralight text-slate-400 py-1">
            *Your ticket will be sent to this email
          </code>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-cyan-500 text-white rounded-md shadow-md p-2 px-4 font-bold">
          Proceed
        </button>
      </div>
    </form>
  </div>
  )
}

export default PassengersDetails