import { Categories, Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
    <Container className="mt-8">
      <Title text="Всё снаряжение" size="lg" className="font-extrabold">
      </Title>
      <Categories></Categories>
    </Container>
    </>
  );
}
