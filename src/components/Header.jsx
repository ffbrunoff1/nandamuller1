import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754612436221_0.webp"
              alt="Nanda Muller"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'brightness-0 invert'
              }`}
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Benefícios', id: 'about' },
              { name: 'Como Funciona', id: 'services' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </nav>
            ))}
          </motion.header>

          <motion.a
            href=""
            className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-primary text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Garantir Acesso Agora
          </motion.a>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </motion.a>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Benefícios', id: 'about' },
                { name: 'Como Funciona', id: 'services' },
                { name: 'Contato', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </div>
              ))}
              <a
                href=""
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Garantir Acesso Agora
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}