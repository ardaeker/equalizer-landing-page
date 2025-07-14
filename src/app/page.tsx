import { Layout } from "@/components/layout";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Content } from "@/components/content";

export default function Page() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}
