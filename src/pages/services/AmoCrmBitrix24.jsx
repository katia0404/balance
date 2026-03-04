import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Button from "../../components/Button";

const bullets = [
  {
    title: "Хранение всех заявок в одном месте",
    text: "Заявки с сайта, почты, мессенджеров, соцсетей и телефонии собираются в CRM — без таблиц и хаоса.",
  },
  {
    title: "Прозрачный процесс продаж",
    text: "Каждая сделка на этапе воронки: видно, где «застряло», сколько отказов и по каким причинам.",
  },
  {
    title: "Автоматизация в помощь менеджеру",
    text: "Задачи, напоминания и касания ставятся автоматически. КП, счета и документы формируются по одному нажатию.",
  },
  {
    title: "Контроль и дисциплина",
    text: "Система помогает соблюдать регламенты: не забывать клиента, не пропускать сроки и не терять сделки.",
  },
];

const steps = [
  {
    n: "01",
    title: "Аудит",
    text: "Погружаемся в ваши процессы: от руководителя до менеджера. Фиксируем «идеальную» картину работы CRM.",
  },
  {
    n: "02",
    title: "Составление ТЗ",
    text: "Описываем, откуда приходят заявки, как ведутся сделки, какие поля и статусы нужны, какие действия автоматизировать.",
  },
  {
    n: "03",
    title: "Перенос продаж в CRM",
    text: "Настраиваем воронки под ваши этапы, роли и логику работы. Подготавливаем отчёты и контрольные точки.",
  },
  {
    n: "04",
    title: "Подключение коммуникаций",
    text: "Интегрируем телефонию, почту, формы сайта и мессенджеры, чтобы вся переписка и звонки были в карточке клиента.",
  },
  {
    n: "05",
    title: "Обучение и поддержка",
    text: "Проводим обучение (отдельно руководителям и менеджерам), передаём запись и остаёмся на связи в чате поддержки.",
  },
];

const AmoCrmBitrix24 = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />

      <Section>
        <div className="container">
          <div className="flex items-center gap-3 text-n-4 text-sm mb-6">
            <Link className="hover:text-n-1 transition-colors" to="/#features">
              Услуги
            </Link>
            <span>/</span>
            <span className="text-n-1">Внедрение amoCRM и Bitrix24</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="h1 mb-6">Внедрение amoCRM и Bitrix24</h1>
            <p className="body-1 text-n-3 mb-8">
              Автоматизируйте продажи и маркетинг с помощью CRM‑системы, чтобы
              повысить лояльность клиентов и увеличить продажи.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="mailto:info@balance-crm.ru" white>
                Оставить заявку
              </Button>
              <Link
                className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 hover:text-color-1 transition-colors"
                to="/#features"
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h2 className="h2 mb-8">Что вы получаете</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {bullets.map((b) => (
              <div
                key={b.title}
                className="p-8 bg-n-8 border border-n-6 rounded-3xl"
              >
                <h3 className="h5 mb-3">{b.title}</h3>
                <p className="body-2 text-n-3">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h2 className="h2 mb-8">Как проходит работа</h2>
          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="p-8 bg-n-8 border border-n-6 rounded-3xl lg:col-span-1"
              >
                <div className="text-xs font-code font-bold tracking-wider uppercase text-n-4 mb-4">
                  {s.n}
                </div>
                <h3 className="h5 mb-3">{s.title}</h3>
                <p className="body-2 text-n-3">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default AmoCrmBitrix24;

