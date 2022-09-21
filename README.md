# decision-tree
A simple tool to support decision making and also a proof of concept.
Everyone will likely have different approaches to breaking up a question, but the overall idea is thinking through a frequently asked question once, and then accepting the recommendation after following a certain sequence of choices.

Currently the new submission area is more of a worksheet format and not that easy to parse, although the nostalgic/analog aesthetic isn't the worst. Tufte would not necessarily like the loose implementation of this CSS framework.

![decisiontree](https://user-images.githubusercontent.com/102257735/188240088-d21de1a8-59b1-4c03-a71e-4b16808955d0.jpg)

**Tech used:** 
- Front end: React, JavaScript, Tufte CSS, some DaisyUI and Tailwind
- Back end: Node.js, Express, MongoDB, Mongoose. Generally follows MVC pattern.

Likely rebuilding in Next.js as it will generally accumulate content that can be prerendered, and UX of "plant" page has other issues.

## Optimizations
2. Build more user-friendly tree submission form.
3. Add user authentication.
4. Set up multiple list and naming feature for Mongo.
5. Build a "not sure" loop for longer-running questions.

### Progress to date
1. Config environment with Prettier and set up directory structure. 
2. Set up general document draft, to guide schema on server.
3. Set up simple API and back end with document schema. Tested with Postman.
4. Added fetch API to front end.
5. Tried different approaches to styling and ended up landing on Tufte CSS. Left Tailwind and daisyui detritus everywhere.
6. Added a "plant a tree" option; requests accepted with passcode. 
7. A separate copy was built in Next.js and deployed to Vercel, but still thinking through options.

### Upcoming
- [ ] Deploy! ...Maybe make a tree for deciding which hosting provider and whether going serverless.

## Lessons learned
- Wanted a quick-and-dirty React/Mongo setup for experimentation ahead of another larger app. This worked out better than the first time around.
- Still getting closer to deciding whether to componetize certain areas, where logic should be written, and at what point it becomes better to make use of useContext than useState.
- Some more practice configuring dev tools (Prettier/ESLint) and potential for some unit testing eventually. 
