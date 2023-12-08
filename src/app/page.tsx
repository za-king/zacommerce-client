import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen lg:container my-12">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        
        
        
      </div>
    </Layout>
  );
}
