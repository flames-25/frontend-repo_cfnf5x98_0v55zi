import { useState } from 'react'
import { Menu, ShoppingBag, Shirt, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'New Arrivals', href: '#products' },
    { name: 'Characters', href: '#characters' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md border-b border-black/5" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 grid place-items-center text-white shadow-lg">
            <Shirt size={20} />
          </div>
          <span className="text-lg">ThreadVerse</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="group relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
            <Search size={18} className="text-gray-500 group-hover:text-gray-700" />
            Search
          </button>
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-indigo-600 text-white text-[10px] grid place-items-center">2</span>
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-full p-2 hover:bg-gray-100">
          <Menu />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b bg-white/80 backdrop-blur">
            <div className="px-4 py-3 space-y-3">
              {links.map((l) => (
                <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="block text-gray-700">
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
