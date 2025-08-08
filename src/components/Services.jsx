import React from 'react';
import { motion } from 'framer-motion';
import { Book, Dumbbell, Play, CheckCircle, Target, Calendar, Timer, Zap } from 'lucide-react';

export default function Services() {
  const whatYouGet = [
    {
      icon: Book,
      title: 'Cardápio para 7 dias',
      description: 'Prático e saboroso com combinações inteligentes que reduzem retenção de líquidos, desinflamam e nutrem',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612427754_817bgymk5e5_CRIATIVOS-DEVAGAR-E-SEMPRE-2.webp',
    },
    {
      icon: Dumbbell,
      title: '7 Treinos Metabólicos',
      description: 'Dinâmicos e prazerosos que aceleram seu gasto calórico e modelam o corpo sem precisar de academia',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612428689_m88jheqme7f_CRIATIVOS-DEVAGAR-E-SEMPRE.webp',
    },
    {
      icon: Play,
      title: 'Aula Explicativa Gravada',
      description: 'Tira todas as suas dúvidas e mostra passo a passo como aplicar mesmo com rotina corrida',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612425649_fbjqxxg23la_Design-sem-nome-2024-12-16T142539.731.webp',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Você segue o cardápio',
      description: 'Sem complicação, com combinações inteligentes e saborosas que seu corpo vai agradecer',
    },
    {
      step: '02',
      title: 'Você faz os treinos',
      description: 'Metabólicos curtos e eficientes que aceleram seu metabolismo e potencializam a queima',
    },
    {
      step: '03',
      title: 'Você assiste à aula',
      description: 'Entende o porquê de cada passo e elimina todas as dúvidas para ter sucesso total',
    },
    {
      step: '04',
      title: 'Seu corpo responde',
      description: 'Você desincha, elimina líquidos retidos, ativa o metabolismo e começa a emagrecer com leveza',
    },
  ];

  const forWho = [
    'Vive inchada e sente desconforto abdominal',
    'Sofre com intestino irregular',
    'Quer reduzir a aparência das celulites',
    'Precisa de um plano simples que se encaixa na rotina',
    'Quer resultados reais em 7 dias',
  ];

  const conquests = [
    { icon: Target, text: 'Mais leveza e medidas reduzidas' },
    { icon: CheckCircle, text: 'Intestino regulado e bem estar diário' },
    { icon: Zap, text: 'Metabolismo mais ativo e mais energia' },
    { icon: Timer, text: 'Pele com menos celulite e mais firmeza' },
    { icon: Calendar, text: 'Autoconfiança e motivação para continuar' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que você <span className="gradient-text">recebe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um sistema completo para transformar seu corpo em apenas 7 dias, sem fome, sem loucuras, sem treinos intermináveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {whatYouGet.map((item, index ) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-neutral rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-2xl">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold ml-4">{item.title}</h3>
              </div>

              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>

              <motion.div className="mt-6" whileHover={{ scale: 1.02 }}>
                <a
                  href=""
                  className="block w-full text-center bg-gradient-primary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Quero Ter Acesso
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como acontece na <span className="gradient-text">prática</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {step.step}
                </motion.div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Para quem é o <span className="gradient-text">Protocolo</span>
            </h3>

            <div className="space-y-4">
              {forWho.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">
              O que você <span className="gradient-text">conquista</span>
            </h3>

            <div className="space-y-4">
              {conquests.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: -5 }}
                >
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Chega de tentar adivinhar o que comer
          </h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Chega de sofrer com treinos que você não consegue manter. Tenha um roteiro claro e prazeroso que funciona.
            <strong> Garanta agora o seu acesso ao Protocolo Desinchar</strong> e em apenas 7 dias retome o equilíbrio do seu corpo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href=""
              className="inline-flex items-center px-8 py-4 bg-white text-primary text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              COMEÇAR AGORA MESMO
            </motion.a>

            <p className="text-lg">
              Mais <strong>desinchada</strong>, mais <strong>magra</strong>, mais <strong>leve</strong>, saudável e feliz!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-4 gradient-text">
            Comece hoje. Seu corpo pode mudar em uma semana.
          </h4>
          <p className="text-xl text-gray-600">
            Você merece se olhar no espelho e se sentir incrível.
          </p>
        </motion.div>
      </div>
    </section>
  );
}