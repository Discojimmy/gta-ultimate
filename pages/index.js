import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>GTA Ultimate Cinematic Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <audio autoPlay loop>
        <source src="/bg/music.mp3" type="audio/mpeg" />
      </audio>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory text-white">
        <section className="h-screen snap-start relative">
          <video autoPlay loop muted className="w-full h-full object-cover absolute z-0">
            <source src="/bg/cinematic.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-40">
            <motion.h1 
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to GTA Universe
            </motion.h1>
          </div>
        </section>

        <section className="h-screen snap-start bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Explore the Streets</h2>
            <p className="text-xl">Immersive experience like never before.</p>
          </motion.div>
        </section>

        <section className="h-screen snap-start bg-black flex items-center justify-center">
          <img src="/images/gta-car.jpg" alt="GTA Car" className="max-w-[90%] max-h-[80%] rounded-xl shadow-xl" />
        </section>

        <section className="h-screen snap-start bg-gray-950 flex items-center justify-center">
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Coming Soon...
          </motion.h2>
        </section>
      </main>
    </>
  )
}