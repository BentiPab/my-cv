"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NotFoundPage = () => {
  const [seconds, setSeconds] = useState(10);
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
  }, [seconds]);

  useEffect(() => {
    if (seconds <= 0) {
      router.push("/");
    }
  }, [router, seconds]);

  return (
    <section className="py-5 px-14 flex flex-col items-center">
      <div>The page you were looking for does not exist</div>
      <div>
        Please wait {seconds} or click{" "}
        <Link className="text-blue-500 underline" href={"/"}>
          HERE
        </Link>{" "}
        to get redirected
      </div>
    </section>
  );
};

export default NotFoundPage;
