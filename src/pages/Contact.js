import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <div className=" container contactUs">BİZE ULAŞIN</div>
      <div className="socialMedia">
        <div className=" container phoneIcon">
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <div className="phoneNumber">
            <b>+90535 535 35 35</b>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 border-right">
                  <h6>İletişim Formu</h6>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">İsim Soyisim</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="İsim soyisim girin"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Telefon Numarası</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefon numarasını girin"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Adres</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email adresini girin"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Mesaj</label>
                    <textarea
                      row="3"
                      className="form-control"
                      placeholder="Mesajınızı bırakın..."
                    ></textarea>
                  </div>
                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      Gönder
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border-start">
                  <h5 className="main-heading"> Adres Bilgisi</h5>
                  <p>xxx, Kırıkhan, Hatay, TÜRKİYE</p>
                  <p> Telefon: +90 535 xxx xx xx</p>
                  <p> Email: email@domain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
