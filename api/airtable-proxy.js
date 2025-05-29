export default async function handler(req, res) {
  const { video } = req.query;

  const response = await fetch(`https://api.airtable.com/v0/app0nqXjYS3mdULGj/Videos?view=Published&sort[0][field]=Lesson%20Number&sort[0][direction]=asc`, {
    headers: {
      Authorization: `Bearer ${process.env.patNGrZNwfEVXAAQQ.0b066f675070d9280cac1ff726847edb1474cbc9dae0cc8634dd5e2369cac9ae}`
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
