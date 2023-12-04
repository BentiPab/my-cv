import { redirect } from "next/navigation";

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    { next: { revalidate: 5000 } }
  );
  if (!res.ok) {
    redirect("/not-found");
  }

  return res.json();
};
