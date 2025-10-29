import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaPaperPlane,
  FaUniversity,
  FaCheck,
  FaExclamationTriangle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Конфигурация EmailJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_bmhla5h',
    TEMPLATE_ID: 'template_4d59uop',
    USER_ID: '_B-R_iemQHDFnvQ1W'
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500" size={24} />,
      title: t('contacts.info.address.title'),
      content: t('contacts.info.address.content'),
      link: "https://maps.google.com/?q=г. Бишкек, ул. Малдыбаева 24б",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone className="text-green-500" size={24} />,
      title: t('contacts.info.phone.title'),
      content: t('contacts.info.phone.content'),
      link: "tel:+996706998889",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaEnvelope className="text-purple-500" size={24} />,
      title: t('contacts.info.email.title'),
      content: t('contacts.info.email.content'),
      link: "mailto:salymbekov.kg@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaClock className="text-orange-500" size={24} />,
      title: t('contacts.info.hours.title'),
      content: t('contacts.info.hours.content'),
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebook size={20} />,
      name: "Facebook",
      url: "https://facebook.com/salymbekovuniversity",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaInstagram size={20} />,
      name: "Instagram",
      url: "https://instagram.com/salymbekovuniversity",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <FaTelegram size={20} />,
      name: "Telegram",
      url: "https://t.me/salymbekovuniversity",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaWhatsapp size={20} />,
      name: "WhatsApp",
      url: "https://wa.me/996706998889",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const departments = [
    {
      name: t('contacts.departments.admission.title'),
      phone: "+996 706 99 88 89",
      email: "admission@salymbekov.kg",
      description: t('contacts.departments.admission.description')
    },
    {
      name: t('contacts.departments.registrar.title'),
      phone: "+996 706 99 88 90",
      email: "registrar@salymbekov.kg",
      description: t('contacts.departments.registrar.description')
    },
    {
      name: t('contacts.departments.finance.title'),
      phone: "+996 706 99 88 91",
      email: "finance@salymbekov.kg",
      description: t('contacts.departments.finance.description')
    },
    {
      name: t('contacts.departments.international.title'),
      phone: "+996 706 99 88 92",
      email: "international@salymbekov.kg",
      description: t('contacts.departments.international.description')
    }
  ];

  // Функция для открытия карты в новом окне
  const openMapInNewWindow = () => {
    window.open("https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D1%8B%D0%BC%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2+%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82/@42.8441282,74.6001724,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec987f324329b:0x2cd99bcd0df5fc1f!8m2!3d42.8441282!4d74.6001724!16s%2Fg%2F11lh2dfxc_?entry=ttu", "_blank");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Валидация формы
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Пожалуйста, заполните обязательные поля');
      }

      // Отправка через EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || 'Не указан',
        subject: formData.subject || 'Сообщение с сайта',
        message: formData.message,
        to_email: 'salymbekov.kg@gmail.com',
        reply_to: formData.email,
        time: new Date().toLocaleString('ru-RU')
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );

      setSubmitStatus({
        type: 'success',
        message: t('contacts.form.success') || 'Сообщение успешно отправлено!'
      });

      // Сброс формы
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || t('contacts.form.error') || 'Произошла ошибка при отправке'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-50 to-cyan-50"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <FaUniversity className="text-xl" />
            <span className="font-semibold">{t('contacts.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            {t('contacts.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contacts.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('contacts.info.title')}
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group ${
                    item.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Социальные сети */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t('contacts.social.title')}
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('contacts.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contacts.form.description')}
              </p>

              {/* Статус отправки */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-2xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus.type === 'success' ? (
                      <FaCheck className="text-green-500 text-xl" />
                    ) : (
                      <FaExclamationTriangle className="text-red-500 text-xl" />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contacts.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={t('contacts.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contacts.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={t('contacts.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contacts.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={t('contacts.form.phonePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contacts.form.subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={t('contacts.form.subjectPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contacts.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={t('contacts.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('contacts.form.sending') || 'Отправка...'}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>{t('contacts.form.button')}</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  * {t('contacts.form.required') || 'Обязательные поля'}
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Отделы университета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            {t('contacts.departments.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <a 
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <FaPhone className="text-sm" />
                    <span className="text-sm">{dept.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <FaEnvelope className="text-sm" />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Карта */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          <div className="h-96 relative bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center flex-col bg-white/80 backdrop-blur-sm map-fallback">
              <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
              <p className="text-gray-600 text-lg mb-4 text-center">
                {t('contacts.map.loading') || "Карта загружается..."}
              </p>
              <motion.button
                onClick={openMapInNewWindow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                <FaMapMarkerAlt />
                <span>{t('contacts.map.button') || "Открыть карту"}</span>
              </motion.button>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.748238083213!2d74.5979985!3d42.8448895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec987f324329b%3A0x2cd99bcd0df5fc1f!2z0KHQsNC70YPQvdCx0LjQutC-0LIg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQo9C90LjQstC10YDRgdC40YLQtdGC!5e0!3m2!1sru!2skg!4v1690000000000!5m2!1sru!2skg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Расположение Салымбеков Университета"
              className="absolute inset-0"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.querySelector('.map-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {t('contacts.map.title')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('contacts.map.address')}
                  </p>
                </div>
                <motion.button
                  onClick={openMapInNewWindow}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-colors text-sm"
                >
                  <FaMapMarkerAlt />
                  <span>{t('contacts.map.button')}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;