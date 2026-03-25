export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("Message reçu :", { name, email, message });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
