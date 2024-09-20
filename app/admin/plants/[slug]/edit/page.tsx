export default function EditPlantPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Edit Plant Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  )
}