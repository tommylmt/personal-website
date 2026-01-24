export type TAboutLinks =
    'php'
    |'react'
    |'vue'
    |'tailwind'
    |'docker'
    |'aws'
    |'trax'
;

export const Links: Record<TAboutLinks, string> = {
    php: 'https://php.net',
    react: 'https://react.dev/',
    vue: 'https://vuejs.org',
    tailwind: 'https://tailwindcss.com',
    docker: 'https://www.docker.com',
    aws: 'https://aws.amazon.com',
    trax: 'https://trax.thomaslamothe.com'
};
