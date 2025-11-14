import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CharactersRow from './components/CharactersRow'

const products = [
  {
    id: 1,
    title: 'Nova Oversized Tee',
    character: 'Nova',
    price: 39,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Blaze Tech Hoodie',
    character: 'Blaze',
    price: 79,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Echo Cargo Pants',
    character: 'Echo',
    price: 69,
    image: 'https://images.unsplash.com/photo-1602585198422-d795fa9bfd6f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFY2hvJTIwQ2FyZ28lMjBQYW50c3xlbnwwfDB8fHwxNzYzMTA2MDkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Rune Windbreaker',
    character: 'Rune',
    price: 89,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <section id="products" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">New Arrivals</h2>
              <a href="#" className="text-sm text-indigo-600">View all</a>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p, idx) => (
                <ProductCard key={p.id} product={p} delay={idx * 0.05} />
              ))}
            </div>
          </div>
        </section>

        <CharactersRow />

        <section id="about" className="py-16 md:py-24 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="about" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Designed with story. Built for comfort.</h3>
              <p className="mt-4 text-gray-600">Each piece in the collection is inspired by our original characters and their worlds. Layer premium materials with playful details and subtle symbolism. Wear your fandom without saying a word.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-semibold">Premium Fabrics</div>
                  <p className="text-sm text-gray-600">Soft, durable, and ethically sourced.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-semibold">Limited Drops</div>
                  <p className="text-sm text-gray-600">Small batches, unique designs.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-semibold">Fast Shipping</div>
                  <p className="text-sm text-gray-600">Worldwide delivery in 3-7 days.</p>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="text-sm font-semibold">Easy Returns</div>
                  <p className="text-sm text-gray-600">Hassle-free within 30 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ThreadVerse. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
