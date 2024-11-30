'use client';
import React, { useState } from 'react';
import axios from 'axios';

type Props = object;

function PassengerContent({}: Props) {
  const [data, setData] = useState({
    code: '', // The state for the customer code
  });
  const [confirmation, setConfirmation] = useState<string | null>(null); // State for confirmation message

  // Function to send the code to the API route
  async function readandSendCode(e: React.FormEvent) {
    e.preventDefault(); // Prevent page refresh on form submission

    try {
      // Send the code to the API endpoint using Axios
      const response = await axios.post('/api/user-read', { code: data.code });

      // If the request is successful, update the confirmation state
      if (response.status === 200) {
        console.log('Code successfully read:', response.data);
        setConfirmation(
          response.data.exists
            ? 'Code Validated 🤩.'
            : 'Code not valid 😥'
        );
      }
    } catch (error) {
      console.error('Error sending the code:', error);
      setConfirmation('An error occurred while checking the code. Please try again.');
    }
  }

  return (
    <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
      <div className="form-container md:w-1/3 p-[40px]">
        <h2 className="text-2xl mb-3">Enter your unique customer code!</h2>
        <form action="" className="md:p-[20px]" onSubmit={readandSendCode}>
          <div className="mb-4">
            <label htmlFor="code">Customer Code</label>
          </div>

          <div className="mb-8 md:w-[370px] w-[200px]">
            <input
              className="bg-input-grey md:w-[370px] w-full rounded-sm h-[32px]"
              placeholder="e.g. 12334"
              id="code"
              name="code"
              type="text"
              value={data.code}
              onChange={(e) =>
                setData({ ...data, code: e.target.value }) // Update code in state
              }
              required
            />
          </div>

          <button className="bg-black text-white w-[140px] h-[36px] rounded-md">Enter Code</button>
        </form>

        {/* Display the confirmation message */}
        {confirmation && (
          <div className="mt-4 text-purple-600">
            <p>{confirmation}</p>
          </div>
        )}
      </div>

      <div className="image-container md:w-2/3">
        <img
          className="md:w-full md:h-full w-screen h-[300px]"
          src="./at-boda-pic.PNG"
          alt="electric ebike"
        />
      </div>
    </div>
  );
}

export default PassengerContent;
