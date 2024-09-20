import Link from "next/link";

export default function PlantDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-2xl font-bold"
      >Plant Detail Page</h1>
      <p>Slug: {params.slug}</p>
      <Link href="/admin/plants/[slug]/edit" as={`/admin/plants/${params.slug}/edit`}>
        Edit Plant
      </Link>
    </div>
  )
}