User Stories:
1. As a user, I want to be able to view prompts after entering sites
2. As a user, I can click on the prompts to view it in more detail in another page
3. As a logged in user, I can click on buttons to upvote or downvote the prompt
4. As a logged in user, I can favourite a prompt and view it in my profile
5. As a user, I can search a prompt from the search bar
6. As an admin, I can CRUD prompts from admin panel
7. As an admin, I can CRUD users from admin panel

Backlog:
1. Make auth conections with discord between strapi and next auth - DONE
2. Make a new page for the user to see his profile
3. Make a comment section using widgetbot.io / strapi comment plugin
4. Add graphql armor - DONE
5. Add swagger docs - DONE
6. Add search with Meilisearch
7. Add cloudinary for image upload - DONE
8. Add a voting system for each image
9. Deploy backend to render - DONE
10. Deploy frontend to vercel - DONE

Sitemap
- Home
- Profile
- Search

Important things to remember:
- Make sure urls are correct i.e should not end with / in most cases
  - eg. if url is ${process.env.URL}/something then in .env file URL should be https://example.com not https://example.com/
- Deploying Stapi to Render may require several attempts before it works. Check if environment variables are correct and
- If using Discord OAuth2, make sure to add the correct redirect url in the Discord Developer Portal