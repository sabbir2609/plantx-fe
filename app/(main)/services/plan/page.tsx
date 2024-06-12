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

    return (
        <div className="min-h-full bg-base-100">
            <div className="mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Our Service Plans</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-base-300 shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-2xl font-semibold text-center mb-4">{plan.title}</h2>
                            <p className="text-center mb-6">{plan.description}</p>
                            <ul className="mb-6">
                                {plan.service_type_features.map((feature) => (
                                    <li key={feature.id} className="text-gray-700 text-center my-2">{feature.title}</li>
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