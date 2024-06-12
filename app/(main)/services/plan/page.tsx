interface Plan {
    id: number;
    title: string;
    description: string;
    image: string | null;
    budget_range: string | null;
    service_type_features: {
        id: number;
        title: string;
    }[];
}

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_types`,
        {
            cache: 'no-cache',
        }
    );
    if (!res.ok) {
        return <div>Error</div>;
    }
    if (res.status === 204) {
        return <div>No data</div>;
    }
    const plans: Plan[] = await res.json();

    const planColors: { [key: string]: string } = {
        "silver": "bg-[#D9ED92]",
        "gold": "bg-[#B5E48C]",
        "platinum": "bg-[#99D98C]",
        "enterprise": "bg-[#76C893]",
    };

    return (
        <div className="min-h-full bg-base-100">
            <div className="mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Our Service Plans</h1>
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {plans.map((plan, index) => (
                        <div key={index} className={`${planColors[plan.title.toLowerCase()] || "bg-teal-500"} shadow-lg rounded-lg p-8 hover:shadow-xl text-black hover:scale-105 transition-transform duration-300 ease-in-out`}>
                            <h2 className=" text-2xl font-semibold text-center mb-4">{plan.title}</h2>
                            <p className="text-center mb-6">{plan.description}</p>
                            <h2 className="text-center font-semibold mt-4">
                                Features
                            </h2>
                            <ul className="mb-6">
                                {plan.service_type_features.map((feature) => (
                                    <li key={feature.id} className="text-center my-2">{feature.title}</li>
                                ))}
                            </ul>
                            <div className="text-center">
                                <span className="text-2xl font-bold">{plan.budget_range}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}