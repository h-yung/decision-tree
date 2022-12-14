# decision-tree
A simple tool to support decision making and also a proof of concept.
Everyone will likely have different approaches to breaking up a question, but the overall idea is thinking through a frequently asked question once, and then accepting the recommendation after following a certain sequence of your own choices.

## Live: https://the-orchard.netlify.app/
Backend hosted on Render; note that free tier will take (quite) a few seconds to wake up so click around from home page in the meantime.


![decisiontree](https://user-images.githubusercontent.com/102257735/188240088-d21de1a8-59b1-4c03-a71e-4b16808955d0.jpg)

**Tech used:** 
- Front end: React, JavaScript, Tufte CSS, some DaisyUI and Tailwind
- Back end: Node.js, Express, MongoDB, Mongoose. Generally follows MVC pattern.

## Optimizations
1. Debug - env variable for passcode to plant a tree is not acknowledging the passcode (but accepting other env vars).
2. Build more user-friendly tree submission form.
3. Add user authentication.
4. Set up multiple list and naming feature for Mongo.
5. Build a "not sure" loop for longer-running questions.

Currently the new submission area is more of a worksheet format and not that easy to parse, although the nostalgic/analog aesthetic isn't the worst. Tufte would not necessarily like the loose implementation of this CSS framework.

While rebuilding in Next.js would be fine (it will generally accumulate content that can be prerendered, and UX of "plant" page has other issues), I am moving on from this project since there are other backlogged items to build in Next.js.

### Progress to date
1. Config environment with Prettier and set up directory structure. 
2. Set up general document draft, to guide schema on server.
3. Set up simple API and back end with document schema. Tested with Postman.
4. Added fetch API to front end.
5. Tried different approaches to styling and ended up landing on Tufte CSS. Left Tailwind and daisyui detritus everywhere.
6. Added a "plant a tree" option; requests accepted with passcode. 
7. A separate copy was built in Next.js and deployed to Vercel, but still thinking through options.
8. Deployed front and backend separately.

### Upcoming
 ...

## Lessons learned
- Wanted a quick-and-dirty React/Mongo setup for experimentation ahead of another larger app. This worked out better than the first time around.
- Still getting closer to deciding whether to componetize certain areas, where logic should be written, and at what point it becomes better to make use of useContext than useState.
- Some more practice configuring dev tools (Prettier/ESLint) and potential for some unit testing eventually. 
