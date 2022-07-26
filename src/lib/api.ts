export async function api(query, {variables}: any = {}) {
  const headers = {'Content-Type': 'application/json'}
  const res = await fetch(import.meta.env.WP_GRAPHQL, {
    method: 'POST',
    headers,
    body: JSON.stringify({query, variables}),
  })

  const json = await res.json()
  if (json.errors) {
    console.log(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}
