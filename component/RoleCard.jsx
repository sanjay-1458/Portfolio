const RoleCard = ({ title, iconSrc }) => {
  const cardGlowClass = "shadow-lg shadow-[#00bf8f]/30 transition-shadow";

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`w-56 h-72 p-6 flex flex-col items-center justify-center 
                        bg-black border border-gray-800 rounded-3xl text-white 
                        text-center ${cardGlowClass}`}
    >
      <div
        className="w-24 h-24 mb-6 rounded-2xl flex items-center justify-center 
                            bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                            p-2 shadow-xl shadow-purple-500/40"
      >
        <Image
          src={iconSrc}
          alt={title}
          width={80}
          height={80}
          className="rounded-xl object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
    </motion.div>
  );
};
