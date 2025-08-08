import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Clock, ChevronDown, Instagram } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = await recaptchaRef.current.executeAsync();

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: '', // Adicione o e-mail do destinatário aqui
          token,
        } ),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const faqs = [
    {
      question: 'O Protocolo Desinchar realmente funciona em 7 dias?',
      answer: 'Sim! O protocolo foi desenvolvido especificamente para gerar resultados rápidos e visíveis. Em 7 dias você notará redução do inchaço, melhora na digestão e mais leveza. Milhares de mulheres já comprovaram a eficácia.',
    },
    {
      question: 'Preciso ir à academia para fazer os treinos?',
      answer: 'Não! Os 7 treinos metabólicos são dinâmicos e podem ser feitos em casa, sem equipamentos. São exercícios prazerosos e eficientes que aceleram seu metabolismo.',
    },
    {
      question: 'E se eu não conseguir seguir o cardápio?',
      answer: 'O cardápio foi criado para ser prático e saboroso, se encaixando na sua rotina. Além disso, a aula explicativa tira todas as dúvidas. E você tem 7 dias de garantia total!',
    },
    {
      question: 'A garantia é real?',
      answer: 'Absolutamente! Você tem 7 dias para testar o protocolo. Se não ficar satisfeita, devolvemos 100% do seu investimento. Sua satisfação é nosso compromisso.',
    },
    {
      question: 'Posso fazer se tenho restrições alimentares?',
      answer: 'O protocolo é flexível e pode ser adaptado. Na aula explicativa, mostramos como fazer ajustes para diferentes necessidades. Em caso de dúvidas específicas, nossa equipe está sempre disponível.',
    },
    {
      question: 'Quanto tempo tenho acesso ao material?',
      answer: 'Você tem acesso vitalício a todo o material! Pode repetir o protocolo quantas vezes quiser e acessar sempre que precisar.',
    },
  ];

  const nutritionist = {
    name: 'Fernanda Muller',
    image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754612429954_jw31jrooqfg_Fernanda_Muller.webp',
    credentials: [
      'Formada em Nutrição há 20 anos',
      'Especialização em Nutrição Ortomolecular',
      'Mestrado em Ciências do Esporte',
      'Criadora do Método Pera',
      '+15.000 mulheres transformadas',
    ],
    bio: 'Criou o Método Pera, focado em emagrecimento e reeducação alimentar. Reconhecido pelo sucesso entre pacientes, incluindo figuras públicas como Juliana Paes e Rebeca Andrade. Em 2019, expandiu para programa online que já beneficiou mais de 15 mil mulheres em todo o Brasil.',
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Conheça quem criou o Protocolo</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Uma especialista com 20 anos de experiência que já transformou mais de 15 mil vidas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src={nutritionist.image}
                alt={nutritionist.name}
                className="w-full h-auto rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">20 anos</div>
                  <div className="text-sm text-gray-600">experiência</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              <span className="gradient-text">{nutritionist.name}</span>
                

              Nutricionista Especialista
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{nutritionist.bio}</p>
            <div className="space-y-3 mb-8">
              {nutritionist.credentials.map((credential, index ) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 font-medium">{credential}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href=""
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-white text-lg font-bold rounded-full hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO CONHECER O PROTOCOLO
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Ainda tem <span className="gradient-text">dúvidas?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe está pronta para te ajudar! Entre em contato e tire todas as suas dúvidas sobre o Protocolo Desinchar.
            </p>
            <div className="space-y-6">
              <motion.a
                href="https://instagram.com/nandamuller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Instagram className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm opacity-90">@nandamuller</div>
                </div>
              </motion.a>
              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-100 rounded-xl"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-gray-800">Horário de Atendimento</div>
                  <div className="text-sm text-gray-600">Segunda a Sexta: 9h às 18h</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
              {submitStatus === 'success' && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Mensagem enviada com sucesso! Retornaremos em breve.
                </motion.div>
               )}
              {submitStatus === 'error' && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Erro ao enviar mensagem. Tente novamente.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}