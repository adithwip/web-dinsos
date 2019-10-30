<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Dinsos Web Project Starter - Built with Gatsby
</h1>

## 🚀 Quick start

1.  **How to run this project?**
    - Set Up your environment here [Gatsby Environment setup](https://www.gatsbyjs.org/tutorial/part-zero/)
    - Use the best node version you have
    - [**updated**] Since we use @bit as [new charts library](https://bit.dev/primefaces/primereact/chart?example=5d42e64160fbc6001439e6d1), we should consider some new configurations
      - You might find an error if not run this command below
      - Install @bit, refer to this [docs](https://docs.bit.dev/docs/installation)
      - After successful installation, run `bit login`
      - Success with login, run `bit config get user.token`
      - And then run `export BIT_TOKEN=$(bit config get user.token)`
      - We need to configure scoped registry, use `npm config` command
      - `npm config set '@bit:registry' https://node.bit.dev`
      - Refer to this doc for [more](https://docs.bit.dev/docs/installing-components)
      - Why there are lot of steps after we use a new library?
        - Well, that's because we create `.npmrc` in our project
        - That `.npmrc` required `BIT_TOKEN` to successfully run the entire project (dev or prod)
        - Refer to this [docs](https://docs.bit.dev/docs/ci#add-npmrc-to-the-project) for more understanding :)
    - The process above 👆🏻 needed to be run first, before `npm install`
    - run `npm install`
    - run `npm run develop` to start development mode

2. **What if you encountered problems?**
    - You can ask the best questions-answerer [Rahmat Setiawan](https://www.facebook.com/setiawan.rahmat.50)
    - Kidding, you can ask me...
    - You might encountered an error, don't hesitate to ask me as this project initiator :)

3. **Advanced**
    - There is some changes in package.json scripts, since we decided to use #@bit component
    ```
    //package.json
    "build": "npm run npmconfig@bit && gatsby build",
    "npmconfig@bit": "npm config set '@bit:registry' https://node.bit.dev",
    ```
    - The `package.json` above run multiple commands in `build` script
    - The purpose of this is to run `npmconfig@bit` first before `gatsby build`
    - To prevent errors when build this project locally (not in server)
<!-- AUTO-GENERATED-CONTENT:END -->
