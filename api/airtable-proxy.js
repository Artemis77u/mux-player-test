export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/app0nqXjYS3mdULGj/Videos?view=Published&sort[0][field]=Lesson%20Number&sort[0][direction]=asc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    res.status(500).json({ error: "Failed to fetch data from Airtable." });
  }
}
