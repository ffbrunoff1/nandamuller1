import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754612436221_0.webp"
              alt="Nanda Muller"
              className="h-12 w-auto mb-6 brightness-0 invert"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando vidas através da nutrição há mais de 20 anos. 
              O Protocolo Desinchar é o resultado de anos de experiência e mais de 15 mil mulheres transformadas.
            </footer>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/nandamuller"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Protocolo Desinchar</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Cardápio 7 dias
                </span>
              </span>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Treinos Metabólicos
                </span>
              </span>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Aula Explicativa
                </span>
              </span>
              <li>
                <span className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Garantia 7 dias
                </span>
              </span>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Resultados</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">✨ Desinchar em 7 dias</span>
              </span>
              <li>
                <span className="text-gray-300">⚡ Emagrecer com leveza</span>
              </span>
              <li>
                <span className="text-gray-300">🌿 Regular intestino</span>
              </span>
              <li>
                <span className="text-gray-300">💪 Melhorar metabolismo</span>
              </span>
              <li>
                <span className="text-gray-300">❤️ Reduzir celulites</span>
              </span>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Copyright | Todos os direitos reservados | CNPJ 33.373.007.0001/08
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Criado com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>por</span>
              <a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-primary hover:text-accent transition-colors duration-300"
              >
                Papum
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href=""
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            TRANSFORME SEU CORPO AGORA
          </motion.a>
          
          <p className="text-gray-400 text-sm mt-4">
            Você merece se olhar no espelho e se sentir incrível. Comece hoje!
          </p>
        </motion.div>
      </div>
    </footer>
  )
}