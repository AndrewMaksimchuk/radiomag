export default async function getGroupData(id) {
  const url = `http://localhost:3000/group/${id}`;
  const data = await fetch(url);
  return data.json();
}
