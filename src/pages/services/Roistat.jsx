import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Button from "../../components/Button";

const bullets = [
  {
    title: "Сквозная аналитика",
    text: "Сводите рекламу, заявки и продажи в одну картину — понимаете, что приносит деньги, а что «сливает» бюджет.",
  },
  {
    title: "Email‑трекинг и коллтрекинг",
    text: "Видите, с какой кампании пришло письмо или звонок. Привязываете обращения к источнику и к сделке в CRM.",
  },
  {
    title: "Контроль менеджеров",
    text: "Понимаете, кто из менеджеров отстаёт, а кто продаёт лучше. Находите причины отказов и улучшаете конверсию.",
  },
  {
    title: "Отчетность для роста",
    text: "Настраиваем отчёты и пользовательские показатели, которые подсвечивают слабые места и помогают увеличивать выручку.",
  },
];

const steps = [
  {
    n: "01",
    title: "Анализ",
    text: "Изучаем рекламные каналы, текущую CRM и приёмщики заявок. Фиксируем базовые показатели и точки роста.",
  },
  {
    n: "02",
    title: "Настройка и интеграция",
    text: "Подключаем Roistat, интегрируем источники и каналы, при необходимости дорабатываем CRM для отчётности.",
  },
  {
    n: "03",
    title: "Отчёты и показатели",
    text: "Разрабатываем отчёты, которые показывают реальную картину и помогают принимать решения на данных.",
  },
  {
    n: "04",
    title: "Обучение",
    text: "Объясняем, как отслеживать показатели, интерпретировать их и делать выводы, чтобы системно расти.",
  },
  {
    n: "05",
    title: "Поддержка",
    text: "Еженедельные созвоны в течение месяца: вместе анализируем данные и корректируем настройки.",
  },
];

const Roistat = () => {
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
            <span className="text-n-1">Внедрение аналитики Roistat</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="h1 mb-6">Внедрение аналитики Roistat</h1>
            <p className="body-1 text-n-3 mb-8">
              Анализируйте эффективность рекламы, выявляйте неэффективные каналы и
              контролируйте работу отдела маркетинга.
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

export default Roistat;

