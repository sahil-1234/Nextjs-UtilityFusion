export async function generateMetadata() {
  return {
    title: 'Image Converter'
  }
}

export default function ImageConverterLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
