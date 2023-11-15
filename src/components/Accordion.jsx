import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Dron ile tarım alanlarını ilaçlama nedir ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dronlar, tarım alanlarında bitki hastalıkları, zararlılar veya
            yabancı otlarla mücadele amacıyla kullanılan hava araçlarıdır.
            Dronlar, tarım ilaçlarını ve diğer gerekli maddeleri taşıyarak tarım
            arazilerini etkili bir şekilde ilaçlayabilirler. Bu yöntem, manuel
            ilaçlama veya geleneksel tarım ekipmanları kullanılarak yapılan
            işlemlere kıyasla daha hızlı ve hassas bir şekilde
            gerçekleştirilebilir. Ayrıca, dronlar, tarım alanlarının düzensiz
            topografyalarına daha iyi uyum sağlayabilir ve çiftçilere zaman ve
            işgücü tasarrufu sağlayarak verimliliği artırabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Dron ile tarım alanlarını ilaçlamadaki amaç nedir ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b> 1.Etkinlik ve Verimlilik: </b>
            Dronlar, tarım ilaçlarını daha etkili bir şekilde ve hedeflenen
            bölgelere hassas bir biçimde uygulayabilir. Bu, ilaçların daha
            verimli kullanılmasına ve tarım alanlarının daha etkili bir şekilde
            korunmasına olanak tanır.
            <br></br>
            <b> 2.Hızlı İlaçlama:</b>
            Dronlar, tarım ilaçlarını hızlı bir şekilde uygulayabilir, bu da
            geniş tarım alanlarının kısa sürede ilaçlanabilmesine olanak tanır.
            Geleneksel yöntemlerle kıyaslandığında, dronlar daha hızlı sonuçlar
            sağlayabilir.
            <br></br>
            <b> 3.İnsan Sağlığı ve Güvenlik:</b>
            Dronlar, tarım ilaçları ile temas eden çalışanların maruz kalma
            riskini azaltabilir. Bu da işçi sağlığı ve güvenliği açısından
            olumlu bir etki yaratabilir.
            <br></br>
            <b>4.Toprak ve Su Koruma:</b>
            Dronlar, ilaçları daha hassas bir şekilde uygulayarak çevresel
            etkileri minimize edebilir. Bu, toprak ve su kaynaklarının
            korunmasına katkıda bulunabilir.
            <br></br>
            <b>5.Hassas Tarım Uygulamaları:</b>
            Dronlar, tarım alanlarını yüksek çözünürlüklü görüntülerle
            inceleyebilir ve bu verileri kullanarak hassas tarım uygulamalarını
            destekleyebilir. Bu, su, gübre ve ilaç gibi kaynakların daha verimli
            bir şekilde kullanılmasına olanak tanır. Dronlarla tarım ilaçlama,
            bu gibi faktörlerle birleşerek tarımın sürdürülebilirliğini
            artırmayı ve daha verimli hale getirmeyi amaçlar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
