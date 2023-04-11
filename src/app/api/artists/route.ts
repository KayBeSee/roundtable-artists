import { v2 as cloudinary } from "cloudinary";

import { data } from "data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const main = searchParams.get("main");
    const slug = searchParams.get("slug");

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });

    let transformations;
    if (main) {
      transformations = { transformation: "f_jpg,w_8,q_70" };
    } else {
      transformations = { transformation: "f_jpg,w_8,q_70" };
    }

    const { resources } = await cloudinary.api.resources_by_asset_folder(
      `roundtable/artists/${slug}`,
      { ...transformations, tags: true }
    );

    console.log("resources: ", resources);
    const result = resources.filter((item) => {
      if (main) {
        return item.tags.includes("main");
      } else {
        return !item.tags.includes("main");
      }
    });

    console.log("result: ", result);
    return NextResponse.json(main ? result[0] : result);
  } catch (e) {
    return NextResponse.json([]);
  }
}
