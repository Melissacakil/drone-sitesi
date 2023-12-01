import React, { useState, useEffect } from "react";

const Today = () => {
  const [bugununTarihi, setBugununTarihi] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Her gün 00:00'da tarihi güncelle
      const yeniTarih = new Date();
      yeniTarih.setHours(0, 0, 0, 0);
      setBugununTarihi(yeniTarih);
    }, 1000);

    // Komponent unmount edildiğinde interval'i temizle
    return () => clearInterval(intervalId);
  }, []); // useEffect sadece bir kere çağrılsın

  const tarihRakam = bugununTarihi.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div className="today">
      <p> {tarihRakam} Tarihi İtibariyle </p>
    </div>
  );
};

export default Today;
