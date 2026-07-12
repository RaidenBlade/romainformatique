import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Date manquante" }, { status: 400 });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      date,
      status: { in: ["pending", "confirmed"] },
    },
    select: { time: true },
  });

  return NextResponse.json({
    taken: bookings.map((b) => b.time),
  });
}
