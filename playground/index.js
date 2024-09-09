app.post("/add", async (req, res) => {
    const input = req.body["country"];
  
    try {
      const result = await db.query(
        "SELECT country_code FROM countries WHERE country_name = $1",
        [input]
      );
  
      if (result.rows.length !== 0) {
        const data = result.rows[0];
        const countryCode = data.country_code;
  
        // Insert into visited countries if not already visited
        await db.query(
          "INSERT INTO visited_countries (country_code) VALUES ($1) ON CONFLICT DO NOTHING",
          [countryCode]
        );
  
        const countries = await checkVisisted();
  
        // Send a JSON response with the new data
        res.json({ success: true, countryCode: countryCode, total: countries.length });
      } else {
        res.json({ success: false, message: "Country not found." });
      }
    } catch (error) {
      console.error("Error adding country:", error);
      res.status(500).json({ success: false, message: "Server error." });
    }
  });
  