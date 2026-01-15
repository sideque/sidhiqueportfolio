import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const connectMongoDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e: any) {
    cached.promise = null;
    // If it's an auth error from MongoDB, provide a clearer message for developers
    const msg = String(e?.message || e);
    if (/bad auth|authentication failed|auth failed/i.test(msg)) {
      // Log the original error (but avoid printing credentials)
      console.error("MongoDB connection authentication error (masked):", msg);
      throw new Error(
        "MongoDB authentication failed: check your MONGODB_URI credentials and database user permissions"
      );
    }
    throw e;
  }

  return cached.conn;
};

export default connectMongoDB;
