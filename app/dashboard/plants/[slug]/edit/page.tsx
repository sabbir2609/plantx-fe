export default async function EditPlantPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return (
    <div>
      <h1>Edit Plant Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  )
}