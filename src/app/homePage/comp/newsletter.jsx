'use client'
import React, {useEffect} from 'react'

const Newsletter = () => { 
    useEffect(() => { 
        window.CustomSubstackWidget = { 
            substackUrl: "robertfoley.substack.com", 
            placeholder: "example@gmail.com", 
            buttonText: "Subscribe", 
            theme: "purple", 
        }; 
        const script = document.createElement('script'); 
        script.src = "https://substackapi.com/widget.js"; 
        script.async = true; document.body.appendChild(script); 
        return () => { document.body.removeChild(script); 

        }; 
    }, []);
    return (
      <div className="m-10 flex justify-center">
        <div className="flex flex-col items-center gap-10 py-10 border border-gray-800 bg-base-200 rounded-2xl shadow-xl w-[500px] px-10">
          <h3 className="text-2xl text-center">Sign up to My Newsletter</h3>
          <div id="custom-substack-embed">Loading...</div>
        </div>
      </div>
    );
}
export default Newsletter


{/* <iframe src="https://robertfoley.substack.com/embed" width="480" height="150" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe> */}