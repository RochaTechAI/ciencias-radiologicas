export const post = {
  name: 'post',
  title: 'Artigos & Notícias',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Tomografia', value: 'Tomografia' },
          { title: 'Ressonância', value: 'Ressonância' },
          { title: 'Ultrassonografia', value: 'Ultrassonografia' },
          { title: 'Medicina Nuclear', value: 'Medicina Nuclear' },
          { title: 'Saúde & Tecnologia', value: 'Saúde & Tecnologia' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Resumo da Notícia',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Conteúdo do Artigo',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};