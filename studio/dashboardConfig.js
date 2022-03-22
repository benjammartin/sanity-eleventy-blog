export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6239b396ddf0fc52d05e4e5d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-qdoybzrr',
                  apiId: 'f4bae54a-4389-4550-bfc1-cac2e3a04f65'
                },
                {
                  buildHookId: '6239b3969336e25450e324ca',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-d9muzmme',
                  apiId: '3d6183c6-8385-4cd7-8d9b-1c533d380e6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benjammartin/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-d9muzmme.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
