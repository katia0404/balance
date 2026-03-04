import Section from "./Section";
import Heading from "./Heading";
import { service1, check } from "../assets";
import { brainwaveServices } from "../constants";
import { Gradient } from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="БУЛАТ ИМПОРТ" />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Примеры работ"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">БУЛАТ ИМПОРТ</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Благодаря автодозвонам, менеджеры стали чаще дозваниваться до
                клиентов, что привело к значительному увеличению продаж.
                <br />
                <br />
                Интеграция телефонии и мессенджеров сделала общение с клиентами
                быстрее и удобнее для всех сторон.
                <br />
                <br />
                Руководство теперь видит полную картину по продажам и может
                легко управлять процессом.
              </p>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
