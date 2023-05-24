import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div id="registration" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-500 sm:text-4xl">Register to win!</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            <em><strong>Note:</strong> <span className="text-lg text-red-500">*</span> All fields required, incomplete entries will be disqualified.<br />Please see our <a href="terms-and-conditions" className="text-indigo-500 underline hover:text-red-500 transition-all duration-500" >Terms & Conditions</a></em>
          </p>
        </div>
        <div className="mt-12">
          <form action="https://lamesarv.activehosted.com/proc.php" id="_form_17_" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            
            <input type="hidden" name="u" value="17" />
            <input type="hidden" name="f" value="17" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                First name <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                Last name <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$" 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="(555) 987-6543"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
                <div className="mt-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="field[12]">
                        Mailing Address <span className="text-lg text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                        <input 
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                          id="field[12]" 
                          name="field[12]" 
                          type="text" 
                          placeholder="" 
                          required
                        />
                    </div>
                </div>
            </div>
            
            <div className="sm:col-span-2">
                <div className="mt-1">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="field[13]">
                        City <span className="text-lg text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                        <input 
                          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                          id="field[13]" 
                          name="field[13]" 
                          type="text" 
                          placeholder="" 
                          required
                        />
                    </div>
                </div>
            </div>

            <div>
              <label htmlFor="field[14]" className="block text-sm font-medium text-gray-700">
                State <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select 
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                    id="field[14]" 
                    name="field[14]"
                    required
                >
                    <option value=""></option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="field[15]" className="block text-sm font-medium text-gray-700">
                Zip <span className="text-lg text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input 
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" 
                    id="field[15]" 
                    name="field[15]"
                    type="text" 
                    placeholder="87102"
                    required 
                />
              </div>
            </div>

            <div className="flex justify-center sm:col-span-2 ">
              <button
                id="_form_17_submit"
                type="submit"
                className="w-full xs:h-16 sm:h-12 text-md mt-10 bg-red-500 text-center	text-white uppercase transition-all duration-500 font-bold py-2 px-4 rounded filter drop-shadow-md hover:text-white hover:bg-indigo-500 "
              >
                Register for a chance at one balloon ride
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
