import Link from "next/link";


export default function PlantListPage() {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold"
      >Plant List Page</h1>
      <Link href="/admin/plants/create">
        Add Plant
      </Link>
      <br />
      <Link href="/admin/plants/1">
        Plant 1
      </Link>
    </div>
  )
}