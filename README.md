# clone-netflix
Netflix Clone project

### Clone interface Netflix


![ezgif com-gif-maker](https://user-images.githubusercontent.com/54041918/173088592-49eca842-cc79-4561-b482-a35df83b1cca.gif)


### Deploy aplication React clone Netflix 

https://cristianonetflix-i02hbvncw-cristianofilho.vercel.app/



<h3 align="center" fontSize="60px">
  Clone of the streaming platform <a href="https://www.netflix.com/">Netflix</a>
</h3>


## :rocket: Technologies

- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-icons](https://react-icons.netlify.com/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

## 💻 About the project

Recreate the [Netflix](https://www.netflix.com/) interface as a way of learning and training skills using TypeScript, React and CSS. During the construction of this project this [video](https://www.youtube.com/watch?v=tBweoUiMsDg&ab_channel=BoniekyLacerda) was used as support material.

All catalog data such as title, description, cover, background photo and rating were extracted using the [TMDb API](https://www.themoviedb.org/documentation/api).

### Functionalities

- [x] **Spinning Loading**: Effect when bringing data from API.

- [x] **Featured Catalog**: Select a catalog at random and display it on the home page.

- [x] **Sessions Listing**: When consuming the API, separate the catalogs into sessions.

- [x] **Menu Effect**: Create an effect on the menu background according to the user's screen scroll.

- [x] **Catalog Card**: Display a card with the catalog details when hovering over the cover.

- [x] **Carousel Listing**: Present control buttons to manipulate the visualization of session items.

- [ ] **Infinite Listing**: When reaching the end of the list of catalogs, the same items from the beginning must be presented.


## 📥 Installation and execution

Make a clone of this repository and access the directory.

```bash
$ git clone git@github.com:CristianoFIlho/clone-clone.git && cd clone-netflix
```

To access the API you will need a key, just create a TMDB account to have access, [registration link](https://www.themoviedb.org/signup). Key path: **Profile -> Settings -> API -> API Key**

Rename the `.env.example` file to `.env` and paste your key value into the **REACT_APP_API_KEY** field. Now install the dependencies and run the project:

```bash
# Installing the dependencies
$ yarn

# Running application
$ yarn start
```

## :muscle: Contribute

`Fork` and clone the project from your user.

```bash
# Cloning project
$ git clone https://github.com/YOUR-USER-NAME/clone-netflix.git

# Creating a branch
$ git branch my-change

# Accessing the new branch
$ git checkout -b my-change

# Adding the changed files
$ git add .

# Creating commit and message
$ git commit -m "Fixing...."

# Sending changes to the brach
$ git push origin my-change
```
You must navigate to your forked repository and click the *New pull request* button on the left side of the page.

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.