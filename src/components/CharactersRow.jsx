import { motion } from 'framer-motion'

const characters = [
  { name: 'Nova', color: 'from-indigo-500 to-fuchsia-500', emoji: '🪐' },
  { name: 'Blaze', color: 'from-rose-500 to-orange-500', emoji: '🔥' },
  { name: 'Echo', color: 'from-teal-500 to-cyan-500', emoji: '🎧' },
  { name: 'Rune', color: 'from-emerald-500 to-lime-500', emoji: '🔮' },
  { name: 'Vesper', color: 'from-purple-500 to-indigo-500', emoji: '🌙' },
]

export default function CharactersRow() {
  return (
    <section id="characters" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by Character</h2>
          <a href="#" className="text-sm text-indigo-600">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {characters.map((c, idx) => (
            <motion.a
              key={c.name}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              href="#"
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.color} p-4 text-white aspect-square`}
            >
              <div className="absolute -bottom-6 -right-6 text-8xl opacity-20 select-none">{c.emoji}</div>
              <div className="font-semibold">{c.name}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
