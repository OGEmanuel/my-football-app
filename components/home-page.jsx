import { motion } from 'framer-motion';
import Link from 'next/link';

const h1Variant = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delayChildren: 0.5,
    },
  },
};

const h2Variant = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

const containerVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const HomePage = props => {
  const { countries } = props;

  return (
    <div className="grid items-center h-screen px-5 my-10 gap-5 mx-auto max-w-[30rem] md:gap-10 md:max-w-[50rem] md:px-10 xl:my-0 xl:grid-cols-2 justify-between xl:max-w-[1440px]">
      <div className="relative">
        <div className="absolute top-0 -left-4 w-52 h-52 mix-blend-multiply filter blur-xl opacity-70 bg-purple-300 rounded-full animate-blob md:w-72 md:h-72"></div>
        <div className="absolute top-0 right-40 w-52 h-52 mix-blend-multiply filter blur-xl opacity-70 bg-yellow-300 rounded-full animate-blob animation-delay-2000 md:w-72 md:h-72"></div>
        <div className="absolute top-10 left-20 w-52 h-52 mix-blend-multiply filter blur-xl opacity-70 bg-pink-300 rounded-full animate-blob animation-delay-4000 md:w-72 md:h-72"></div>
        <motion.h1
          variants={h1Variant}
          initial="hidden"
          animate="visible"
          className="font-bold text-3xl mt-5 md:text-7xl"
        >
          Welcome to{' '}
          <span className="block ml-12 text-[#0a4f90]">My Football App</span>
        </motion.h1>
        <div className="font-semibold overflow-hidden text-lg mt-5 text-[#e5c685] bg-black rounded-lg px-5 py-2.5 md:text-3xl">
          <motion.h2
            variants={h2Variant}
            initial="hidden"
            animate="visible"
            className="capitalize"
          >
            Select a country of your choice to checkout their Top flight
            football League
          </motion.h2>
        </div>
      </div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-x-5 gap-y-10 w-max mx-auto md:gap-y-5 md:grid-cols-3 md:gap-x-10 xl:gap-y-20"
      >
        {countries.map(country => (
          <Link
            href={`/${country.country_id}`}
            key={country.country_id}
            className="grid grid-rows-[max-content,_1fr] gap-2.5 shadow-2xl rounded-lg bg-[#e5c685] p-2.5"
          >
            <p className="text-2xl font-semibold">{country.country_name}</p>
            <img
              src={country.country_logo}
              alt="flag"
              className="w-full h-full"
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
