// import Layout from "../components/layout"

import { motion } from "framer-motion";
import Card from "../components/card";
import { slideIn } from "../utils/motion";


const images = [
  'https://img.freepik.com/free-photo/tiger-with-cyberpunk-design-illustration_826849-604.jpg?t=st=1688324773~exp=1688325373~hmac=cae46e3440fdec35dc91e0f0e768a1251c82e9def35bcbae29b6203580a9e162&w=826',
  'https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?w=740&t=st=1688325894~exp=1688326494~hmac=6ac5728456c2e2d2630c0932de29a1bd32120d5f79b656c43bb7f8254a333fd7',
  'https://img.freepik.com/free-photo/cat-warriors-with-burning-eyes-generative-ai_8829-2909.jpg?w=740&t=st=1688326917~exp=1688327517~hmac=de24e823ceb0e159d69859c07a609eb7f3aa38111ca0d021bb35791e868374b0',
  'https://img.freepik.com/free-photo/bird-colorful-colorful-flowers-generative-ai_206725-752.jpg?w=740&t=st=1688326981~exp=1688327581~hmac=92c83547957c1888ca8bf33ad1427e010719cf858552ca1e288b5449a9843cdb',
  'https://img.freepik.com/free-photo/hightech-helmets-humanoid-being-generative-ai_8829-2879.jpg?w=740&t=st=1688327007~exp=1688327607~hmac=93b1ae1e132b9a3aadc2c70a886fa90f7cd572d517971ab924a86c736224fc82',
  'https://img.freepik.com/free-photo/medium-shot-female-astronaut-wearing-spacesuit_23-2150417565.jpg?t=st=1688327021~exp=1688327621~hmac=ff39183f88fa6eb100b485fbbb02d3b2df9057d16252b476928d476a576cad6e&w=740',
  'https://img.freepik.com/free-photo/hightech-helmets-humanoid-being-generative-ai_8829-2879.jpg?w=740&t=st=1688327007~exp=1688327607~hmac=93b1ae1e132b9a3aadc2c70a886fa90f7cd572d517971ab924a86c736224fc82',
  'https://img.freepik.com/free-photo/hightech-helmets-humanoid-being-generative-ai_8829-2879.jpg?w=740&t=st=1688327007~exp=1688327607~hmac=93b1ae1e132b9a3aadc2c70a886fa90f7cd572d517971ab924a86c736224fc82',
  'https://img.freepik.com/free-photo/hightech-helmets-humanoid-being-generative-ai_8829-2879.jpg?w=740&t=st=1688327007~exp=1688327607~hmac=93b1ae1e132b9a3aadc2c70a886fa90f7cd572d517971ab924a86c736224fc82',
]

export default function IndexPage() {

  return (
    <div className="px-8 py-2 md:px-16 md:py-4">
      <section className="py-20">
        <div className="m-auto max-w-7xl space-y-12">
          <motion.div
            className="space-y-2"
            variants={slideIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-600 md:text-5xl">Prompt Treasure</h4>
            <p className="text-lg text-white">
              100 Prompts for Midjourney
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <Card
                key={index}
                src={image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
