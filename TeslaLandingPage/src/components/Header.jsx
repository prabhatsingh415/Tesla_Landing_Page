import React from "react";


function Header() {
    return (
        <div
            className="flex flex-wrap h-14 w-full bg-[var(--color-steel-gray)] rounded-2xl border-solid border-2 border-white text- text-center z-40">

            <div className="my-3 w-2/5 flex place-content-start ">
                <a href="/"
                   className="text-[var(--color-bright-white)] text-2xl mx-8 border-b-2 border-transparent hover:border-[var(--color-tesla-red)] hover:border-solid transition duration-300">
                    Tesla
                </a>
            </div>

            <div className="my-3 w-3/5 mx-auto flex place-content-around">
                <a href="/"
                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Vehicles
                </a>
                <a href="/"
                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Energy
                </a>
                <a href="/"
                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Charging
                </a>
                <a href="/"
                   className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    AutoPilot
                </a>
            </div>
        </div>
    )
}

export default Header;