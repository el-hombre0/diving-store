import { Container, Title } from "@/components/shared";
import { Topbar } from "@/components/shared/top-bar";

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
      <Topbar />
    </>
  );
}
