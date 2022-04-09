
import styles from "../../styles/Home.module.scss"

import Link from 'next/link'
import LogoSVG from "./logo"
import React from "react";



export default function NavBar(){

    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
      }

    return(
        <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
            <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <a rel="noopener noreferrer" href="https://forum.rugrepo.com" className="flex items-center px-4 -mb-1 border-b-2  dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Forum</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">About</a>
                </li>
                
            </ul>
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                

                <svg
    xmlns="http://www.w3.org/2000/svg"
    width="158.528mm"
    height="46.765mm"
    viewBox="0 0 449.371 132.562"
    fill="currentColor"
    className="w-36 h-36 dark:text-violet-400"
  >
    <g>
      <g>
        <path
          d="M66.17,54.181c6.051,2.75,6.6,4.95,10.011,15.51,3.85,11.99,3.08,12.43,11.439,14.08l-3.629,6.6H65.84c-1.87-6.82-3.85-14.41-6.49-22.55-2.86-8.8-3.41-11.66-8.36-11.66l-1.1-6.931a22.073,22.073,0,0,0,4.18.441c5.61,0,10.23-1.32,13.091-3.74A15.086,15.086,0,0,0,71.89,35.7c0-8.25-3.189-11.22-10.34-11.22h-7.7l-11,52.031a31.452,31.452,0,0,0-.66,3.85c0,2.64,3.08,2.97,8.14,3.41l-3.41,6.6H17.66l-.66-6.6c8.91-1.1,8.69-1.54,10.56-10.45l9.02-42.57a31.5,31.5,0,0,0,.66-3.851c0-2.309-2.53-2.86-7.59-3.3l3.3-6.6H61.11c11.22,0,18.151.44,23.54,6.051,3.3,3.41,4.4,7.04,4.4,11.769C89.051,43.291,80.8,54.4,66.17,54.181Z"
           
        />
        <path
          d="M139.542,72.221a18.652,18.652,0,0,0-.66,3.85c0,4.95.66,5.17,7.7,4.95l-2.53,6.38-11.77,3.85c-5.39-2.2-7.04-5.61-6.93-10.67-5.72,7.26-11.44,11-19.47,11-5.28,0-9.79-3.41-9.79-10.78a55.656,55.656,0,0,1,1.32-8.69l2.97-14.08a42.623,42.623,0,0,0,.99-6.49c0-2.75-2.42-2.75-5.61-3.08l2.53-5.61,19.91-4.29-7.48,35.2a21.675,21.675,0,0,0-.44,3.74c0,2.2,1.21,3.63,3.74,3.63s7.59-2.53,11.77-8.91l6.49-30.8,14.41-2.86Z"
           
        />
        <path
          d="M204.444,49.23H196.3a13.44,13.44,0,0,1,1.87,6.71c0,11.441-10.45,19.911-22.77,19.911a37.042,37.042,0,0,1-5.39-.55c-2.311,1.21-3.52,2.86-3.52,4.07,0,6.82,28.49.441,28.49,19.03,0,9.46-8.031,17.161-24.751,17.161-16.5,0-25.19-6.491-25.19-13.861,0-5.28,4.62-10.34,12.65-11.22-2.969-2.09-4.4-4.51-4.4-9.02a12.026,12.026,0,0,1,.221-1.98l10.56-6.49c-5.5-2.53-8.471-6.16-8.471-12.87,0-10.78,9.9-20.9,22.33-20.9A23.2,23.2,0,0,1,188.494,41.2h8.58c5.83,0,7.92-.769,11.77-2.529Zm-41.8,44.111c-2.53,1.761-4.4,3.85-4.4,6.82,0,5.39,5.719,8.14,11.33,8.14,7.48,0,11.219-3.96,11.219-6.93C180.793,95.541,171.114,96.531,162.643,93.341Zm15.84-46.861c-4.84,0-8.69,7.481-8.69,15.071,0,4.73,1.87,7.37,5.39,7.37,5.28,0,8.8-7.81,8.8-14.191C183.983,49.341,181.893,46.48,178.483,46.48Z"
           
        />
        <path
          d="M251.635,54.181c6.05,2.75,6.6,4.95,10.01,15.51,3.85,11.99,3.08,12.43,11.44,14.08l-3.63,6.6h-18.15c-1.87-6.82-3.85-14.41-6.49-22.55-2.86-8.8-3.41-11.66-8.36-11.66l-1.1-6.931a22.075,22.075,0,0,0,4.181.441c5.609,0,10.229-1.32,13.089-3.74a15.087,15.087,0,0,0,4.73-10.231c0-8.25-3.19-11.22-10.34-11.22h-7.7l-11,52.031a31.452,31.452,0,0,0-.66,3.85c0,2.64,3.08,2.97,8.14,3.41l-3.41,6.6h-29.26l-.66-6.6c8.91-1.1,8.69-1.54,10.56-10.45l9.02-42.57a31.5,31.5,0,0,0,.66-3.851c0-2.309-2.53-2.86-7.59-3.3l3.3-6.6h28.161c11.219,0,18.149.44,23.54,6.051,3.3,3.41,4.4,7.04,4.4,11.769C274.515,43.291,266.265,54.4,251.635,54.181Z"
           
        />
        <path
          d="M291.129,68.921c0,.33-.22,1.54-.22,2.09,0,2.53-.44,5.72,1.54,8.91a7.678,7.678,0,0,0,7.15,3.74c5.5,0,10.01-3.3,14.3-6.82l3.96,5.28c-6.93,6.38-14.08,9.46-20.9,9.46-7.04,0-12.76-2.75-16.61-7.7-3.3-4.29-4.18-8.8-4.18-14.63,0-6.6,4.73-17.71,13.53-24.2,5.17-3.851,11.88-6.05,16.5-6.05,10.34,0,14.85,4.729,14.85,11.439C321.049,59.351,310.929,68.921,291.129,68.921Zm14.85-22.66c-3.3,0-9.46,4.29-13.2,15.84,13.091-1.32,16.94-8.69,16.94-12.32C309.719,47.361,308.4,46.261,305.979,46.261Z"
           
        />
        <path
          d="M350.2,91.581c-5.39,0-9.35-1.979-12.1-5.83l-2.75,13.09a29.624,29.624,0,0,0-.66,4.511c0,2.089,1.76,2.859,6.6,3.849l-2.639,6.271H313.68l-.33-6.271c7.479-1.54,7.149-2.309,9.68-14.41l7.37-34.76a36.17,36.17,0,0,0,1.1-6.49c0-2.641-2.529-2.75-5.719-3.08l2.53-5.61,17.71-4.29-1.76,8.58c3.63-4.4,7.26-8.031,14.52-8.031,9.35,0,17.16,7.811,17.16,20.571C375.94,77.061,363.18,91.581,350.2,91.581Zm3.85-43.891c-3.85,0-8.69,4.29-11.11,15.731l-1.43,6.71a19.588,19.588,0,0,0-.66,4.07c0,5.72,2.31,8.8,6.82,8.8,8.69,0,14.08-13.97,14.08-24.42C361.75,50.991,359.33,47.69,354.05,47.69Z"
           
        />
        <path
          d="M403.661,91.471c-11.769,0-21.669-7.48-21.669-22,0-16.61,12.87-30.25,28.6-30.25,12.43,0,21.779,8.58,21.779,21.67C432.371,77.5,420.492,91.471,403.661,91.471Zm6.491-44.991c-7.37,0-13.42,12.981-13.42,26.181,0,7.92,2.97,11.55,7.26,11.55,3.849,0,7.7-3.3,10.009-9.02a50.446,50.446,0,0,0,3.63-17.05C417.631,50.551,415.211,46.48,410.152,46.48Z"
           
        />
      </g>
      <path
        d="M170.233,132.562c-26.336,0-38.506-12.655-41.449-24.675a16.842,16.842,0,0,1-2.927-.9,33.4,33.4,0,0,1-3.886-1.881,37.813,37.813,0,0,1-16.089,3.472,27.054,27.054,0,0,1-13.454-3.459,17.013,17.013,0,0,1-8.437,2.249H65.84a17.065,17.065,0,0,1-9.459-2.88,17.067,17.067,0,0,1-9.461,2.88H17.66A16.947,16.947,0,0,1,.745,92.063l-.661-6.6A17.076,17.076,0,0,1,11.368,67.731l6.711-31.678A16.994,16.994,0,0,1,14.444,16l3.3-6.6A16.907,16.907,0,0,1,32.95,0H61.11c11.125,0,24.97,0,35.8,11.273a31.605,31.605,0,0,1,7.629,12.842l10.082-2.173a17.016,17.016,0,0,1,13.692,2.949c.22-.053.441-.1.661-.145l14.408-2.86a17.217,17.217,0,0,1,15.411,4.734c.117.118.232.239.345.361a39.537,39.537,0,0,1,18.795-4.76A42.771,42.771,0,0,1,191.68,24.2h5.394c.414,0,.761,0,1.057,0A16.906,16.906,0,0,1,199.91,16l3.3-6.6A16.909,16.909,0,0,1,218.415,0h28.161c11.124,0,24.967,0,35.8,11.272a31.552,31.552,0,0,1,7.974,14.093A43.226,43.226,0,0,1,306.2,22a35.983,35.983,0,0,1,18.064,4.338l.047-.011,17.708-4.29a17.147,17.147,0,0,1,10.164.68,35.317,35.317,0,0,1,6.6-.608,32.7,32.7,0,0,1,23.759,10.143,44.348,44.348,0,0,1,28.053-10.032c22.108,0,38.779,16.624,38.779,38.67,0,26.68-20.078,47.58-45.71,47.58-10.73,0-20.266-3.759-27.3-10.673a41.151,41.151,0,0,1-18.07,9.827,16.915,16.915,0,0,1-1.331,6.172l-2.639,6.27a16.964,16.964,0,0,1-15.668,10.405H313.68A17,17,0,0,1,296.7,114.366l-.3-5.789a39.116,39.116,0,0,1-17.335-4.181,16.861,16.861,0,0,1-9.609,2.975h-18.15a17.065,17.065,0,0,1-9.459-2.88,17.064,17.064,0,0,1-9.461,2.88H210.713C207.029,120.1,194.812,132.562,170.233,132.562ZM122.17,96.531a4,4,0,0,1,2.243.688,24.513,24.513,0,0,0,4.469,2.365,8.941,8.941,0,0,0,3.335.662,4,4,0,0,1,3.945,3.55c1.086,9.579,10.661,20.766,34.071,20.766,18.48,0,30.954-8.182,33.369-21.885a4,4,0,0,1,3.94-3.306h24.843a9.032,9.032,0,0,0,6.549-2.827,4,4,0,0,1,5.82,0,9.047,9.047,0,0,0,6.551,2.828h18.15a8.933,8.933,0,0,0,6.355-2.634,4,4,0,0,1,4.933-.57,30.3,30.3,0,0,0,16.216,4.414,32.121,32.121,0,0,0,3.294-.175,4,4,0,0,1,4.317,4.849,8.955,8.955,0,0,0-.208,2.419l.33,6.271a9,9,0,0,0,8.988,8.527h24.97a8.981,8.981,0,0,0,8.3-5.508l2.639-6.271a8.942,8.942,0,0,0,.486-5.466,4,4,0,0,1,3.41-4.849c7.256-.9,14.382-4.832,20.065-11.075a4.062,4.062,0,0,1,3.088-1.3,4,4,0,0,1,3,1.5c5.648,7.074,14.183,10.97,24.032,10.97,21.146,0,37.71-17.386,37.71-39.58,0-17.485-13.232-30.67-30.779-30.67a36.61,36.61,0,0,0-25.66,10.6,4,4,0,0,1-6.007-.477A24.59,24.59,0,0,0,358.78,30.11a26.851,26.851,0,0,0-6.11.68,3.989,3.989,0,0,1-2.677-.3,9.092,9.092,0,0,0-6.093-.672L326.191,34.1a9.09,9.09,0,0,0-1.064.334,4,4,0,0,1-3.626-.41C317.477,31.356,312.328,30,306.2,30a37.4,37.4,0,0,0-16.966,4.717,4,4,0,0,1-5.879-3.128,23.8,23.8,0,0,0-6.738-14.765C268.135,8,257.175,8,246.576,8H218.415a8.949,8.949,0,0,0-8.05,4.976l-3.3,6.6a8.975,8.975,0,0,0-.585,6.524,4,4,0,0,1-2.2,4.76c-2.692,1.208-3.839,1.34-7.2,1.34h-6.059a4.007,4.007,0,0,1-1.333-.228,34.191,34.191,0,0,0-11.749-1.751,31.7,31.7,0,0,0-17.649,5.4,4,4,0,0,1-5.725-1.4,9.007,9.007,0,0,0-1.46-1.984,9.115,9.115,0,0,0-8.16-2.506L130.53,32.594a9,9,0,0,0-1.632.486,4,4,0,0,1-4.06-.635c-.064-.053-.13-.112-.193-.172l-.088-.085a9,9,0,0,0-8.25-2.425l-13.9,3a4,4,0,0,1-4.785-3.23,23.458,23.458,0,0,0-6.467-12.7C82.672,8,71.71,8,61.11,8H32.95a8.949,8.949,0,0,0-8.05,4.976l-3.3,6.6a9,9,0,0,0,3.1,11.543,4,4,0,0,1,1.714,4.171l-7.733,36.5a4,4,0,0,1-3.231,3.112,9.029,9.029,0,0,0-7.41,9.762l.66,6.6a8.973,8.973,0,0,0,8.956,8.1H46.92a9.036,9.036,0,0,0,6.55-2.827,4,4,0,0,1,5.82,0,9.036,9.036,0,0,0,6.55,2.828H83.991a9.016,9.016,0,0,0,5.788-2.117,4,4,0,0,1,4.934-.166,18.749,18.749,0,0,0,11.169,3.493,29.687,29.687,0,0,0,14.375-3.561A3.986,3.986,0,0,1,122.17,96.531Z"
         
      />
    </g>
  </svg>
            </a>
            <ul className="items-stretch hidden space-x-3 md:flex">
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Our story</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Link</a>
                </li>
            </ul>
            <button type="button" className="block md:hidden" onClick={handleClick}>
    <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {isOpen && (
        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
        )}
        {!isOpen && (
        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        )}
    </svg>
</button>
        </div>

        <aside className={`w-full p-6 md:hidden  dark:bg-coolGray-900 dark:text-coolGray-100 ${  isOpen ? "block" : "hidden" } `}>
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">

            <ul className="justify-evenly flex">
                <li className="flex">
                    <a rel="noopener noreferrer" href="https://forum.rugrepo.com" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Forum</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">About</a>
                </li>

                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Story</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400 duration-300">Link</a>
                </li>
                
            </ul>
        
		</div>
		
	</nav>
</aside>
    </header>

    );
}