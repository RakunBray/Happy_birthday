import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Clock, Users } from 'lucide-react';

const BirthdayWishes = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 font-sans">
      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
                initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 1 }}
                animate={{
                  y: window.innerHeight,
                  x: Math.random() * 100 - 50 + (Math.random() * window.innerWidth),
                  rotate: 360,
                  opacity: 0
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="text-center py-12 px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-purple-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Ulang Tahun!
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Untuk seseorang yang selalu menemani dalam suka dan duka
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* Birthday Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-4 mb-16 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-pink-500 fill-current" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Terima Kasih Telah Menjadi Bagian Hidup Saya
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Di hari spesialmu ini, aku ingin mengucapkan selamat ulang tahun! 
            Terima kasih untuk setiap tawa, setiap dukungan, dan setiap momen berharga 
            yang telah kita lalui bersama. Kamu adalah berkah terbesar dalam hidupku.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Selamanya</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>Bersama</span>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center text-purple-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Kenangan Indah Bersama
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Photo 1 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Dua orang tersenyum bahagia di taman dengan latar belakang pepohonan hijau" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Saat-saat bahagia di taman
                </p>
              </div>
            </motion.div>

            {/* Photo 2 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Momen perayaan dengan kue ulang tahun dan lilin yang menyala" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Perayaan spesial bersama
                </p>
              </div>
            </motion.div>

            {/* Photo 3 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Perjalanan pantai dengan pemandangan sunset yang indah dan siluet" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Sunset indah di pantai
                </p>
              </div>
            </motion.div>

            {/* Photo 4 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Momen candid tertawa lepas di kafe dengan latar belakang interior yang cozy" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Tertawa bersama di kafe
                </p>
              </div>
            </motion.div>

            {/* Photo 5 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Perjalanan hiking di gunung dengan pemandangan alam yang memukau" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Petualangan seru di gunung
                </p>
              </div>
            </motion.div>

            {/* Photo 6 */}
            <motion.div 
              className="relative group overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <img 
                src="https://placehold.co/600x400" 
                alt="Momen refleksi dan percakapan mendalam di tempat yang tenang" 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  Percakapan hati ke hati
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing Message */}
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Semoga Hari Ulang Tahunmu Penuh Kebahagiaan!
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Teruslah bersinar dan menjadi pribadi yang menginspirasi. 
            Aku selalu disini untuk mendukungmu dalam setiap langkah. 
            <br />
            <span className="font-medium text-pink-500">Selamat ulang tahun untuk orang yang paling spesial!</span>
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white text-center py-8">
        <p>Dibuat dengan ❤️ untuk ulang tahunmu yang spesial</p>
      </footer>
    </div>
  );
};

export default BirthdayWishes;
