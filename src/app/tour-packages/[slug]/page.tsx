interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <h1>Package: {slug}</h1>
      <p>Coming soon - Sri Vinayaka Tours and Travels</p>
    </main>
  );
}