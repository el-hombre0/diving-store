import { Container, Title, Filters, FilterCheckbox } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";

const products_wetsuits = [
  {
    id: 0,
    name: "SEAC гидрокостюм Apnea Royal 7 mm",
    items: [{ price: 9000 }],
    imageUrl:
      "https://www.tradeinn.com/f/13733/137335991/seac-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC-apnea-royal-7-mm.webp",
  },
  {
    id: 1,
    name: "SEAC гидрокостюм для фридайвинга Relax 2.2 mm",
    items: [{ price: 2000 }],
    imageUrl:
      "https://www.tradeinn.com/h/13667/136678913/seac-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC-%D0%B4%D0%BB%D1%8F-%D1%84%D1%80%D0%B8%D0%B4%D0%B0%D0%B9%D0%B2%D0%B8%D0%BD%D0%B3%D0%B0-relax-2.2-mm.webp",
  },
  {
    id: 2,
    name: "Epsealon Штаны для подводной охоты Kombu 5 mm",
    items: [{ price: 2100 }],
    imageUrl:
      "https://www.tradeinn.com/h/13975/139757717/epsealon-%D1%88%D1%82%D0%B0%D0%BD%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BE%D1%85%D0%BE%D1%82%D1%8B-kombu-5-mm.webp",
  },
  {
    id: 3,
    name: "SEAC гидрокостюм Apnea Royal 7 mm",
    items: [{ price: 9000 }],
    imageUrl:
      "https://www.tradeinn.com/f/13733/137335991/seac-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC-apnea-royal-7-mm.webp",
  },
  {
    id: 4,
    name: "SEAC гидрокостюм для фридайвинга Relax 2.2 mm",
    items: [{ price: 2000 }],
    imageUrl:
      "https://www.tradeinn.com/h/13667/136678913/seac-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC-%D0%B4%D0%BB%D1%8F-%D1%84%D1%80%D0%B8%D0%B4%D0%B0%D0%B9%D0%B2%D0%B8%D0%BD%D0%B3%D0%B0-relax-2.2-mm.webp",
  },
  {
    id: 5,
    name: "Epsealon Штаны для подводной охоты Kombu 5 mm",
    items: [{ price: 2100 }],
    imageUrl:
      "https://www.tradeinn.com/h/13975/139757717/epsealon-%D1%88%D1%82%D0%B0%D0%BD%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BE%D1%85%D0%BE%D1%82%D1%8B-kombu-5-mm.webp",
  },
  {
    id: 6,
    name: "Epsealon Штаны для подводной охоты Kombu 5 mm",
    items: [{ price: 2100 }],
    imageUrl:
      "https://www.tradeinn.com/h/13975/139757717/epsealon-%D1%88%D1%82%D0%B0%D0%BD%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BE%D1%85%D0%BE%D1%82%D1%8B-kombu-5-mm.webp",
  },
];
const products_bcds = [
  {
    id: 0,
    name: "SEAC BCD Club",
    items: [{ price: 13400 }],
    imageUrl: "https://www.tradeinn.com/h/13651/136510810/seac-bcd-club.webp",
  },
  {
    id: 1,
    name: "SEAC BCD Smart",
    items: [{ price: 24900 }],
    imageUrl: "https://www.tradeinn.com/f/13590/135908927/seac-bcd-smart.webp",
  },
  {
    id: 2,
    name: "Aqualung BCD Axiom I3",
    items: [{ price: 25000 }],
    imageUrl:
      "https://www.tradeinn.com/f/13946/139466195/aqualung-bcd-axiom-i3.webp",
  },
  {
    id: 3,
    name: "Aqualung BCD Rogue",
    items: [{ price: 33600 }],
    imageUrl:
      "https://www.tradeinn.com/f/13734/137342179/aqualung-bcd-rogue.webp",
  },
  {
    id: 4,
    name: "SEAC BCD Modular REV",
    items: [{ price: 27450 }],
    imageUrl:
      "https://www.tradeinn.com/f/13709/137090237/seac-bcd-modular-rev.webp",
  },
];
export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title
          text="Всё снаряжение"
          size="lg"
          className="font-extrabold"
        ></Title>
      </Container>
      <TopBar />
      {/* Фильтрация + товары */}
      <Container className="pb-14 mt-10">
        <div className="flex gap-16">
          <div className="w-60">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Гидрокостюмы"}
                items={products_wetsuits}
                categoryId={0}
              />
              <ProductsGroupList
                title={"Компенсаторы"}
                items={products_bcds}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
