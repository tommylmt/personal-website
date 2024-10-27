const mainRoutes = {
    iwitLink: 'https://iwit-systems.fr',
    symfonyLink: 'https://symfony.com',
    vueLink: 'https://vuejs.org',
    dockerLink: 'https://docker.com',
    traxLink: 'https://trax.thomaslamothe.com',
    awsLink: 'https://aws.amazon.com/fr/'
}

const education = {
    miage: {
        year: '2020-2021',
        name: 'Miage',
        location: 'Université Toulouse III, Paul Sabatier'
    },
    licence: {
        year: '2019-2020',
        name: 'Licence R.T.A.I.',
        location: 'Université Toulouse I, Capitole'
    },
    college: {
        year: '2017-2019',
        name: 'I.U.T. Informatique',
        location: 'Université Toulouse III, Paul Sabatier'
    },
    highSchool: {
        year: '2014-2017',
        name: 'Lycée Victor Duruy',
        location: 'Bagnères de Bigorre, France'
    }
}

const work = {
    iwit: {
        company: 'Iwit Systems',
        location: 'Toulouse, France',
        timeline: [
            {
                year: 'Depuis 2022',
                job: 'Lead développeur web'
            },
            {
                year: '2021',
                job: 'Développeur web Full-Stack Symfony'
            },
            {
                year: '2020',
                job: 'Développeur web Full-Stack Symfony en alternance'
            },
        ]
    },
    mipih: {
        year: '2019',
        job: 'Développeur web Full-Stack PHP',
        location: 'Toulouse, France',
        company: 'Mipih'
    }
}

const networks = {
    is: {
        name: 'Instagram'
    },
    tw: {
        name: 'Twitter'
    },
    gt: {
        name: 'Github'
    },
    st: {
        name: 'Stack Overflow'
    }
}

export { mainRoutes as mainRoutes, education as education, work as work, networks as networks }
