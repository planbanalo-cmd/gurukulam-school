export default function Offer() {
  const items = [
    "Safety First",
    "Regular Classes",
    "Certified Teachers",
    "Sufficient Classrooms",
    "Creative Lessons",
    "Sports Facilities",
  ];

  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 shadow rounded-xl">
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Far far away, behind the word mountains.
            </p>
            
          </div>
        ))}
      </div>
    </section>
  );
}