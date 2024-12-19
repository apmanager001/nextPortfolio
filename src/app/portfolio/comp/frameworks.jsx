import React from 'react'
import Link from 'next/link';

const Frameworks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-10">
      <div className="flex flex-col items-center my-4 h-60 w-72 border border-gray-600 hover:border-gray-400 rounded-2xl p-10 shadow-2xl">
        <h3>Frameworks</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <div className="badge badge-primary">Vite React</div>
          <div className="badge badge-primary">Next.JS React</div>
          <div className="badge badge-primary">Mongo DB</div>
          <div className="badge badge-primary">Express</div>
          <div className="badge badge-primary">OAuth</div>
          <div className="badge badge-primary">Tailwind CSS</div>
          <div className="badge badge-primary">Daisy UI</div>
          <div className="badge badge-primary">Shadcn/ui</div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 h-60 w-72 border border-gray-600 hover:border-gray-400 rounded-2xl p-10 shadow-2xl">
        <h3>Languages</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <div className="badge badge-primary">HTML</div>
          <div className="badge badge-primary">CSS</div>
          <div className="badge badge-primary">JavaScript</div>
          <div className="badge badge-primary">SQL</div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 h-60 w-72 border border-gray-600 hover:border-gray-400 rounded-2xl p-10 shadow-2xl">
        <h3>Services</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <div className="badge badge-primary">Stripe API</div>
          <div className="badge badge-primary">Supabase</div>
          <div className="badge badge-primary">Amazon S3</div>
          <div className="badge badge-primary">Heroku </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 h-60 w-72 border border-gray-600 hover:border-gray-400 rounded-2xl p-10 shadow-2xl">
        <h3>Libraries</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <Link href="https://www.npmjs.com/package/@nivo/line">
            <div className="badge badge-primary">Nivo Charts</div>
          </Link>
          <Link href="https://www.npmjs.com/package/leaflet">
            <div className="badge badge-primary">Leaflet</div>
          </Link>
          <div className="badge badge-primary">Heroku </div>
        </div>
      </div>
    </div>
  );
}

export default Frameworks