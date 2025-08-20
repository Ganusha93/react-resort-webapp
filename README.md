# React Resort Webapp

This project is a modern React-based web application for a resort or hotel, featuring a clean UI and dynamic content sections inspired by streaming platforms. It showcases different categories, amenities, and movie-like displays, making it perfect for resorts looking to present their offerings in an engaging way.

## 🚀 Live Demo

Check out the deployed application:  
[https://galle-beach-resort.netlify.app/](https://galle-beach-resort.netlify.app/)

## Features

- Modern, responsive React UI
- Multiple content categories (e.g., Originals, Trending, Action, Comedy, etc.)
- Reusable components (Nav, Banner, Row, etc.)
- Easy to customize for different resorts or content types

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ganusha93/react-resort-webapp.git
    cd react-resort-webapp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

The app will run locally at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  ├── components/
  ├── screens/
  │   └── HomeScreen.js
  ├── App.js
  ├── index.js
  └── ...
```

- `components/` – Reusable UI components (Nav, Banner, Row, etc.)
- `screens/` – Page-level components
- `App.js` – Main app routing and layout

## Example HomeScreen Usage

```javascript
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="Myflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow /> 
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchCommedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentry" fetchUrl={requests.fetchDocumentries} />
        </div>
    )
}
```

## Customization

- To add or update categories, modify the `<Row />` components in `HomeScreen.js`.
- Create new components under `components/` as needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

## License

[MIT](LICENSE)

---

Made with ❤️ using React.
