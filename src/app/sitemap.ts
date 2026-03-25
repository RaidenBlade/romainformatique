export default function sitemap() {
  const baseUrl = "https://romainformatique.be";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
    },
  ];
}
