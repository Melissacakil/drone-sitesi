import React from "react";

const WhatsappButton = () => {
  const handleWhatsappClick = () => {
    // Telefon numaranızı ve metni ekleyin
    const phoneNumber = "+905354512967";
    const message = "Merhaba! Teklif almak istiyorum.";

    // WhatsApp bağlantısı oluşturun
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Yeni pencerede veya sekmede WhatsApp'ı aç
    window.open(whatsappLink, "_blank");
  };

  return (
    <button className="btn btn-success" onClick={handleWhatsappClick}>
      Teklif Al
    </button>
  );
};

export default WhatsappButton;
