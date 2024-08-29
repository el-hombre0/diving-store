import { Container, Title, Filters, FilterCheckbox } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";

const products = [
  {
    id: 0,
    name: "SEAC гидрокостюм Apnea Royal 7 mm",
    price: 9000,
    imageUrl:
      "https://www.tradeinn.com/f/13733/137335991/seac-%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC-apnea-royal-7-mm.webp",
  },
  {
    id: 1,
    name: "H.dessault By C4 Ласты для дайвинга Maxx",
    price: 2000,
    imageUrl:
      "https://www.tradeinn.com/f/14047/140472328/h.dessault-by-c4-%D0%9B%D0%B0%D1%81%D1%82%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B0%D0%B9%D0%B2%D0%B8%D0%BD%D0%B3%D0%B0-maxx.webp",
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
        <div className="flex gap-12">
          <div className="w-60">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex">
              {products.map((el) => (
                <ProductCard
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  price={el.price}
                  imageUrl={el.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
