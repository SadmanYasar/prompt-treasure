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


const images = [
    'https://img.freepik.com/free-photo/tiger-with-cyberpunk-design-illustration_826849-604.jpg?t=st=1688324773~exp=1688325373~hmac=cae46e3440fdec35dc91e0f0e768a1251c82e9def35bcbae29b6203580a9e162&w=826',
    'https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?w=740&t=st=1688325894~exp=1688326494~hmac=6ac5728456c2e2d2630c0932de29a1bd32120d5f79b656c43bb7f8254a333fd7',
    'https://img.freepik.com/free-photo/cat-warriors-with-burning-eyes-generative-ai_8829-2909.jpg?w=740&t=st=1688326917~exp=1688327517~hmac=de24e823ceb0e159d69859c07a609eb7f3aa38111ca0d021bb35791e868374b0',
    'https://img.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_206725-752.jpg?w=740&t=st=1688326981~exp=1688327581~hmac=92c83547957c1888ca8bf33ad1427e010719cf858552ca1e288b5449a9843cdb',
    'https://img.freepik.com/free-photo/hightech-helmets-humanoid-being-generative-ai_8829-2879.jpg?w=740&t=st=1688327007~exp=1688327607~hmac=93b1ae1e132b9a3aadc2c70a886fa90f7cd572d517971ab924a86c736224fc82',
    'https://img.freepik.com/free-photo/medium-shot-female-astronaut-wearing-spacesuit_23-2150417565.jpg?t=st=1688327021~exp=1688327621~hmac=ff39183f88fa6eb100b485fbbb02d3b2df9057d16252b476928d476a576cad6e&w=740',
]

export default function Card() {
    return (
        <>
            <motion.div
                initial="hidden"
                whileHover="visible"
                className="max-md:hidden relative max-w-sm rounded overflow-hidden shadow-md transition-colors"
            >
                <img
                    className="w-full h-96 object-cover"
                    src={images[Math.floor(Math.random() * images.length)]}
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
                className="md:hidden relative max-w-sm rounded overflow-hidden shadow-md transition-colors"
            >
                <img
                    className="w-full h-96 object-cover"
                    src={images[Math.floor(Math.random() * images.length)]}
                    alt="Sunset in the mountains"
                ></img>
                <div
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
                </div>
            </div>
        </>
    )
}