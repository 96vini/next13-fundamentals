export async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch('https://api.github.com/users/96vini')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
