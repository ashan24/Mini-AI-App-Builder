import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// API endpoint
app.post("/api/requirements", async (req, res) => {
  try {
    const { description } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are an expert system that extracts app requirements and generates a UI structure.
                      Return **valid JSON only** in this format:

                      {
                        "appName": "<app name>",
                        "roles": {
                          "<Role1>": {
                            "features": {
                              "<Feature1>": {
                                "type": "form" | "table",
                                "fields": ["field1", "field2", ...],
                                "entries": [ {"field1": "value", "field2": "value"}, ... ], // only if type=table
                                "buttonText": "text for form button" // only if type is "form"
                              }
                            }
                          },
                          "<Role2>": {
                            "features": { ... }
                          }
                        }
                      }

                      - Map features to appropriate roles.
                      - Decide the type automatically:
                        - If the feature is "Add" or "Enroll", use "form".
                        - If the feature is "Manage Reports" or "View List", use "table".
                      - If type is table, include **2 sample entries** with random realistic values for the fields.
                      - Include relevant input fields for each feature.
                      - Return **JSON only**.`
        },
        { role: "user", content: description }
      ],
    });

    const requirements = JSON.parse(completion.choices[0].message.content);
    res.json(requirements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
