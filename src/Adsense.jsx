import { useEffect } from "react";

export default function AdSenseAd({ height }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
  }, []);

  return (
    <div
      style={{ width: "100%", height: height }}
      className={`bg-gray-100  flex items-center justify-center my-6 w-full flex-col`}
    >
      <div className="text-center w-full rounded flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6912883132375836"
          data-ad-slot="1763562597"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
