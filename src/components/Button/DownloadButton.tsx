"use client";
import { CVService, UpdateService } from "@/services";
import { useState } from "react";

const DownloadButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={loading}
      className="bg-dodgerblue px-4 py-2 text-white hover:scale-95 transition-transform duration-300  cursor-pointer rounded-2xl disabled:opacity-75 disabled:cursor-wait "
      onClick={async (e) => {
        setLoading(true);
        e.preventDefault();
        await UpdateService.sendNewCVDownload();
        const data = await CVService.fetchCVDocument();
        const link = document.createElement("a");
        link.href = data;
        link.download = `CV Pablo Bentivengo.pdf`;
        link.click();
        setLoading(false);
      }}
    >
      {loading ? "Downloading CV..." : "Download My CV"}
    </button>
  );
};

export default DownloadButton;
