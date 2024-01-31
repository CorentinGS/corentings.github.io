import { defineConfig } from "tinacms";
import { CATEGORIES } from '../src/data/categories.ts'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: '/src/assets/images',
      publicFolder: "",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Post',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'image',
            label: 'Cover Image',
            required: true,
            name: 'heroImage',
            description: 'The image used for the cover of the post'
          },

          {
            type: 'string',
            required: true,
            name: 'category',
            label: 'Category',
            description: 'Select an category for this post',
            options: [...CATEGORIES]
          },
          {
            type: 'string',
            label: 'description',
            required: true,
            name: 'description',
            description: 'A short description of the post'
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published'
          },
          {
            type: 'string',
            name: 'tags',
            required: true,
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags'
            }
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'SButton',
            isBody: true,
            templates: [
              // Custom Components
              {
                label: 'SButton',
                name: 'SButton',
                fields: [
                  {
                    type: 'rich-text',
                    label: 'SButton',
                    name: 'children',
                    isBody: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
})