import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";

const Counter = () => {
  const [customerCount, setCustomerCount] = useState(1567);

  useEffect(() => {
    // Her gün 5 artır
    const interval = setInterval(() => {
      setCustomerCount((prevCount) => prevCount + 5);
    }, 24 * 60 * 60 * 1000); // 24 saat (1 gün) interval

    // Komponent unmount olduğunda interval'i temizle
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="customerArea">
      <Row>
        <Col className="text-center">
          <FaUsers className="customer-icon" />
          <p className="customerText">Müşteri Sayımız</p>
          <p className="customerCount">{customerCount}</p>
        
        </Col>
      </Row>
    </section>
  );
};

export default Counter;
