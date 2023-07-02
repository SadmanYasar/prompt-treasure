import { motion } from 'framer-motion';

const variants = {
    hidden: {
        y: '100%',
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
    visible: {
        y: '0%',
        transition: {
            ease: 'easeOut',
            duration: 1,
        },
    },
};

interface CardProps {
    src: string;
}

export default function Card({ src }: CardProps) {
    return (
        <>
            <motion.div
                initial="hidden"
                whileHover="visible"
                className="max-md:hidden relative max-w-sm rounded overflow-hidden shadow-md transition-colors"
            >
                <img
                    className="w-full h-96 object-cover"
                    src={src}
                    alt="Sunset in the mountains"
                ></img>
                <motion.div
                    variants={variants}
                    className="md:absolute md:bottom-0 backdrop-blur-xl"
                >
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-600">The Coldest Sunset</div>
                        <p className="text-slate-100 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                        </span>
                    </div>
                </motion.div>
            </motion.div>
            <div
                className="md:hidden relative max-w-sm rounded overflow-hidden shadow-lg transition-colors"
            >
                <img
                    className="w-full h-96 object-cover"
                    src={src}
                    alt="Sunset in the mountains"
                ></img>
                <div
                    className="md:absolute md:bottom-0 bg-slate-700"
                >
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-600">The Coldest Sunset</div>
                        <p className="text-slate-100 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #photography
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #travel
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}