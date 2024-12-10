const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const resourcesRoute = require("./routes/getResource");
const detailRoute = require("./routes/getDetail");
const upload = require("./routes/upload");
const updateview = require("./routes/updateView");
// Middleware for parsing JSON
app.use(express.json());
app.use(express.json()); // Parse incoming JSON payloads

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your Next.js frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use("/", resourcesRoute);
app.use("/", detailRoute);
app.use("/", upload);
app.use("/", updateview);

// Mock Data for Resources
const resources = [
  {
    id: "1",
    title: "GSS Textbooks Photocopy for Free",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
    thumbnail: "/IMG_0528.JPG",
    views: 20,
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    description:
      "This resource includes advanced math problems, solutions, and comprehensive guides.",
    thumbnail: "/IMG_0528.JPG",
    views: 2004,
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    description:
      "This resource includes advanced math problems, solutions, and comprehensive guides.",
    thumbnail: "/IMG_0528.JPG",
    views: 2004,
  },
];
const details = {
  id: "1",
  title: "GSS Textbooks Photocopy for Free",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa consequatur adipisci fuga nisi, eos obcaecati vitae incidunt cupiditate ea consequuntur eum doloremque modi, tempore officia! Voluptatum aperiam rem consectetur sequi?",
  thumbnail: "/IMG_0528.JPG",
  views: 20,
  gallery: [
    {
      type: "pdf",
      url: "/h.pdf",
    },
    {
      type: "image",
      url: "/IMG_0528.JPG",
    },
    {
      type: "audio",
      url: "/audio.mp3",
    },

    {
      url: "/11c94773-dc78-4ad8-8f51-8f483e90d386.mp4",
      type: "video",
    },
  ],
};

// API to Get Resource Details by ID

// Fallback Route
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
