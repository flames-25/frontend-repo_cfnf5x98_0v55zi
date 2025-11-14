import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none bg-[radial-gradient(60%_60%_at_50%_10%,rgba(168,85,247,0.15),transparent)]" />
      <div className="pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Wear Your World.
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg md:text-xl text-gray-600">
              Character-inspired streetwear crafted with premium fabrics and a touch of magic.
            </motion.p>

            <div className="mt-8 flex items-center gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#products" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 font-medium">
                Shop New Drops
              </motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#characters" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-medium">
                Browse Characters
              </motion.a>
            </div>

            <div className="mt-6 flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <img key={i} alt="avatar" src={`https://i.pravatar.cc/100?img=${i}`} className="h-9 w-9 rounded-full ring-2 ring-white" />
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-rose-50 border">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/2F3rQnHLu7pJ6dXN/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
