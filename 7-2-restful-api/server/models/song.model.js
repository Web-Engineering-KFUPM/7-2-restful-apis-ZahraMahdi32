import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title:  { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    year:   { type: Number, min: 1900, max: 2100 }
  },
  { timestamps: true }
);

// 🔥 أهم جزء — يحوّل _id → id تلقائيًا
songSchema.method("toJSON", function () {
  const { _id, __v, ...obj } = this.toObject();
  obj.id = _id;
  return obj;
});

const Song = mongoose.model("Song", songSchema);

export default Song;
