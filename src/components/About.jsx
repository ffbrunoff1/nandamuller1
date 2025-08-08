import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart, Clock, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, number: '15.000+', label: 'Mulheres Transformadas' },
    { icon: TrendingUp, number: '20 anos', label: 'de Experiência' },
    { icon: Award, number: '100%', label: 'Satisfação Garantida' },
    { icon: Clock, number: '7 dias', label: 'Para Resultados' },
  ];

  const problemSolutions = [
    {
      problem: 'Você acorda se sentindo estufada',
      solution: 'Cardápio anti-inflamatório que reduz inchaço desde o primeiro dia',
    },
    {
      problem: 'A calça aperta e a barriga parece pesada',
      solution: 'Combinações inteligentes que eliminam retenção de líquidos',
    },
    {
      problem: 'O intestino não ajuda e a autoestima despenca',
      solution: 'Regulação intestinal natural com alimentos funcionais',
    },
    {
      problem: 'Treinos cansativos sem resultados',
      solution: '7 treinos metabólicos dinâmicos e prazerosos',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O problema <span className="gradient-text">não é você</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Falta um plano simples, direto e gostoso que coloque seu corpo de volta ao equilíbrio. O Protocolo Desinchar foi criado exatamente para isso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Problemas que você enfrenta vs. <span className="gradient-text">Nossa solução</span>
            </h3>

            <div className="space-y-6">
              {problemSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="mb-3">
                    <span className="text-red-500 font-semibold text-sm">❌ PROBLEMA:</span>
                    <p className="text-gray-700 mt-1">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-green-500 font-semibold text-sm">✅ SOLUÇÃO:</span>
                    <p className="text-gray-700 mt-1 font-medium">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612426557_zdc36afq3b_721A0315-1-scaled.webp"
                alt="Resultados do Protocolo Desinchar"
                className="w-full h-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -top-6 -left-6 bg-gradient-primary text-white p-4 rounded-2xl shadow-xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">7 dias</div>
                  <div className="text-sm text-gray-600">para resultados</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Imagina vestir aquela roupa com confiança...
          </h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Sentir a barriga mais leve, notar o intestino funcionando como deveria, perceber a pele mais lisinha, ter energia de sobra e ver o espelho te devolvendo o sorriso.
            <strong> Isso é o que o Protocolo Desinchar faz por você em uma semana.</strong>
          </p>

          <motion.a
            href=""
            className="inline-flex items-center px-8 py-4 bg-white text-primary text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO ESSA TRANSFORMAÇÃO
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index ) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h4 className="text-2xl font-bold text-gray-800">Selo de Garantia</h4>
            </div>
            <p className="text-lg text-gray-700">
              <strong>7 dias para você experimentar</strong> ou tenha 100% do seu investimento de volta! Não se preocupe, a sua satisfação é o meu compromisso!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}