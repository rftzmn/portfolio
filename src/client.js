import { SanityClient, createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_PROJECT_ID,
    dataset: import.meta.env.VITE_DATASET,
    apiVersion: '2023-11-26',
    useCdn: true,
    token: import.meta.env.VITE_APP_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)