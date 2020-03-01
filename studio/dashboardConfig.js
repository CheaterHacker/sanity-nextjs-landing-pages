export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5c0e33e250ff73a57cadf8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8cwyq9mt',
                  apiId: 'd0d339df-ffaf-43e9-924e-5b1d1b07e44f'
                },
                {
                  buildHookId: '5e5c0e3341bf96365ec80038',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m9paumks',
                  apiId: '15e1075d-c13f-4cf0-9335-03b05874551f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CheaterHacker/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m9paumks.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
