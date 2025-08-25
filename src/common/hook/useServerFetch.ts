export async function UseServerFetch<T>(url: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      next: { revalidate: 5 },
    })

    const data = await response.json()

    const value: T = data
    return value
  } catch (error) {
    console.error('errrrror', error)
  }
}
