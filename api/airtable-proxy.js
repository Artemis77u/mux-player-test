export default async function handler(req, res) {
  const { video } = req.query;

  const response = await fetch(`https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME?view=Published&sort[0][field]=Lesson%20Number&sort[0][direction]=asc`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
