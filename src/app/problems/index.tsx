import Link from "next/link"

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Home Page</h1>
      <Link href="/src/app/problems/page">
        <a className="text-blue-500 underline">Go to Problems</a>
      </Link>
    </div>
  )
}

export defa