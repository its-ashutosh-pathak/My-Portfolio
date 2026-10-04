import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '9dyzkm9i',
    dataset: 'production',
    useCdn: true, // set to false if you want to ensure fresh data
    apiVersion: '2023-05-03', // use a UTC date string
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
