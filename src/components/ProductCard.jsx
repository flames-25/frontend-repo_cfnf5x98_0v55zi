import { motion } from 'framer-motion'

export default function ProductCard({ product, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="group rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.character}</p>
          </div>
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <button className="mt-3 w-full rounded-lg bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-800">Add to bag</button>
      </div>
    </motion.div>
  )
}
