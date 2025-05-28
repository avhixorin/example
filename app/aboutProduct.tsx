export default function Impact() {
  const stats = [
    {
      label: "Before",
      color: "bg-blue-500",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
      ],
    },
    {
      label: "After",
      color: "bg-cyan-400",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex perspiciatis atque magnam neque dolore! Nihil quidem architecto iusto aperiam est soluta hic",
      ],
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden py-16">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-blue-200/30 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-200/30 rounded-full blur-lg" />
        <div className="absolute bottom-1/3 left-10 w-28 h-28 bg-cyan-200/30 rounded-full blur-lg" />
      </div>
    lo
      <div className="relative z-10 text-center mb-16">
        <p className="text-sm font-medium text-purple-600 tracking-wider uppercase mb-4">
          Before Vs After
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700">Impact</h2>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl h-full items-stretch">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group transition-transform duration-300 flex flex-col h-full"
          >
            <div
              className={`${item.color} text-white px-6 py-3 rounded-2xl rounded-bl-sm shadow-lg mb-4 relative`}
            >
              <span className="text-2xl lg:text-3xl font-bold">
                {item.label}
              </span>
              <div
                className={`absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 ${item.color.replace(
                  "bg-",
                  "border-t-"
                )}`}
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex-grow flex flex-col">
              <ul className="space-y-4">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
