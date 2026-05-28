import { defineQuery } from 'next-sanity'

export const allArticlesQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)]
    | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
`)

export const articleBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    mainImage,
    body,
    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`)

export const articlesByCategoryQuery = defineQuery(`
  *[_type == "post"
    && defined(slug.current)
    && count(categories[@->slug.current == $categorySlug]) > 0]
    | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        _id,
        title,
        "slug": slug.current
      }
    }
`)
