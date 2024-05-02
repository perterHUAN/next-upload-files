export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");
  console.log("file: ", file);
  return Response.json({ messge: "upload file successful!!!" });
}
