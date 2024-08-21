import { Container, Title, Filters, FilterCheckbox } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

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
            <Filters/>
          </div>
          <div className="flex-1">
            <div className="flex">
              Список товаров
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
