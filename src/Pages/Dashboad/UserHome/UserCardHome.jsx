import { data } from "autoprefixer";

const UserCardhome = ({ product }) => {
  const {
    name,
    emailAddress,
    occupation,
    taskName,
    phoneConfirmation,
    priority,
    textarea,
    date,
  } = product;

  return (
    // <div  classNameName="card w-96 bg-base-300 shadow-xl">
    //   <div  classNameName="card-body">

    //     <h2  classNameName="card-title">{name}</h2>
    //     <p>{emailAddress}</p>

    //     <p>{textarea}</p>

    //     <div  classNameName="card-actions justify-end">
    //       <button  classNameName="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>

    // < className="flex items-center justify-center  from-red-100 via-red-300 to-blue-500 bg-gradient-to-br">
    <div className="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      <div className="sm:w-8/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-cyan-900 text-justify">
              {textarea}
            </h4>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            <div className="flex gap-3 space-y-1">
              {/* <img
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                className="rounded-full h-8 w-8"
              /> */}
              <span className="text-sm"> {emailAddress}</span>
            </div>
            <div className=" px-3 py-1 rounded-lg flex space-x-2 flex-row">
              <div className="cursor-pointer text-center text-md justify-center items-center flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-md"
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                </svg>
                <span className="text-md mx-1">{taskName}</span>
              </div>
              <div className="cursor-pointer text-center text-md justify-center items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>

                <span className="text-md mx-1">{phoneConfirmation}</span>
              </div>
            </div>
          </div>
          {/* -------------------------middle------------- */}
          <div className="flex items-center space-x-4 justify-center">
            <div className="flex flex-row space-x-1">
              <div className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                <span>{name}</span>
              </div>
            </div>
          </div>
          {/* ---------------end */}
          <div className="flex items-center space-x-4  justify-center">
            <div className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-xs">{date}</p>
            </div>
            <div className="flex flex-row space-x-1">
              <div className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                </svg>

                <span>{occupation}</span>
              </div>
              <div className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l4 2" />
                  <path d="M12 8v4l-4 2" />
                </svg>

                <span>{priority}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardhome;
