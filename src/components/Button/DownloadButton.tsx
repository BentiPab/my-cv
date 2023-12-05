"use client";
import { CVService } from "@/services";
import { useState } from "react";

type Props = {
  handleClick: () => Promise<string>;
};

const DownloadButton = ({ handleClick }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={loading}
      className="bg-dodgerblue px-4 py-2 text-white hover:scale-95 transition-transform duration-300  cursor-pointer rounded-2xl disabled:opacity-75 disabled:cursor-wait "
      onClick={async (e) => {
        setLoading(true);
        e.preventDefault();
        const data = await handleClick();
        const link = document.createElement("a");
        link.href = data;
        link.download = `CV Pablo Bentivengo.pdf`;
        link.click();
        setLoading(false);
      }}
    >
      Download My CV
    </button>
  );
};

export default DownloadButton;
