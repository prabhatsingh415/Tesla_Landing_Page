import {motion} from "motion/react";

function DesktopHeader() {
    return (
        <motion.div
            // whileHover={{scale: 1.1}}
            // whileTap={{scale: 0.8}}
            className="w-full flex p-2 h-16 my-2 rounded-2xl bg-black text-black border-4 border-[var(--color-tesla-red)] rounded-xl shadow-[0_0_30px_5px_var(--color-tesla-red)]"
        >
            <div className="w-2/5">
                <motion.a
                    whileHover={{scale: 0.5}}
                    whileTap={{scale: 0.8}}
                    href="/"
                    className="text-[var(--color-bright-white)] text-2xl mx-8 border-b-2 border-transparent hover:border-[var(--color-tesla-red)] hover:border-solid transition duration-300"
                >
                    Tesla
                </motion.a>
            </div>

            <div
                className="w-3/5 mt-2 flex place-content-around">
                <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    href="/"
                    className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Vehicles
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    href="/"
                    className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Energy
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    href="/"
                    className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    Charging
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                    href="/"
                    className="text-[var(--color-bright-white)] border-b-2 border-transparent hover:border-[var(--color-tesla-red)] transition duration-300">
                    AutoPilot
                </motion.a>
            </div>
        </motion.div>
    )
}

export default DesktopHeader;