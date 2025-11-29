export default function Explore() {
    const steps = [
        {
            icon: "➕",
            title: "Creezi un eveniment",
            description: "Sportive, pentru toate gusturile",
        },
        {
            icon: "🤝",
            title: "Oamenii se alătură",
            description: "Comunitatea găsește și se înscrie la evenimentul tău",
        },
        {
            icon: "🎉",
            title: "Participați împreună",
            description: "Vă bucurați de experiență și creați amintiri",
        },
    ];

    return (
        <section className="py-10 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Cum funcționează
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
