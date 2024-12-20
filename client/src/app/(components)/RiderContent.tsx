'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

type Props = object;

function RiderContent({}: Props) {
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const { data: session } = useSession();

  // Function to generate and send the code
  async function generateAndSendCode() {
    const code = Math.floor(10000 + Math.random() * 90000).toString();

    try {
      const response = await axios.post('/api/code-gen', { code });

      if (response.status === 200) {
        setGeneratedCode(response.data.code || code); // Fallback to generated code
      }
    } catch (error) {
      console.error('Error sending the generated code:', error);
    }
  }

  return (
    <div className="flex-container flex flex-col lg:flex-row p-[60px] space-y-[20px] lg:space-x-[110px] min-h-screen min-w-screen">
      {session ? (
        <div className="form-container md:w-1/3 p-[40px]">
          <h2 className="text-2xl mb-3">Generate unique customer code!</h2>
          <button
            className="bg-black text-white w-[140px] h-[36px] rounded-md relative left-14"
            onClick={generateAndSendCode}
          >
            Generate
          </button>
          <div className="mt-4">Session data: {session.user?.name}</div>
          {generatedCode && (
            <h4 className="mt-4 text-lg font-bold">
              Your unique code is: {generatedCode}
            </h4>
          )}
        </div>
      ) : (
        <div className="form-container md:w-1/3 p-[40px]">
          <h2 className="text-2xl mb-3">Please Login To Generate a Code</h2>
        </div>
      )}

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

export default RiderContent;
