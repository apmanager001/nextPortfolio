import React from 'react'
import Link from 'next/link';

const Frameworks = () => {
  return (
    <div className="flex justify-center gap-8 my-10">
      <div className="flex flex-col items-center my-4 w-72 border border-gray-600 rounded-2xl p-10 shadow-2xl">
        <h3>Frameworks</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <div className="badge badge-primary">React</div>
          <div className="badge badge-primary">Mongo DB</div>
          <div className="badge badge-primary">Express</div>
          <div className="badge badge-primary">Tailwind CSS</div>
          <div className="badge badge-primary">Daisy UI</div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 w-72 border border-gray-600 rounded-2xl p-10 shadow-2xl">
        <h3>Services</h3>
        <div className="flex flex-wrap gap-2 justify-center my-10">
          <div className="badge badge-primary">Stripe API</div>
          <div className="badge badge-primary">Amazon S3</div>
          <div className="badge badge-primary">Heroku </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 w-72 border border-gray-600 rounded-2xl p-10 shadow-2xl">
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