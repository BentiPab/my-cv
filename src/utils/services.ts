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

export const basicPost = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
    { body: undefined, method: "POST", cache: "no-store" }
  );

  if (!res.ok) {
    redirect("/not-found");
  }

  return res.json();
};

export const outsideFetch = async <returnType>(
  url: string
): Promise<returnType> => {
  const res = await fetch(url, { next: { revalidate: 5000 } });

  return res.json();
};

export const outsidePost = async <returnType>(url: string) => {
  const res = await fetch(url, {
    body: undefined,
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
