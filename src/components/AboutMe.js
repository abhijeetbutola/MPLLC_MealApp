import React from "react";

const AboutMe = () => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <div style={styles.container}>
        <h1 style={styles.header1}>Abhijeet Butola</h1>
        <p style={styles.paragraph}>
          Hi! I'm experienced software engineer focused on building engaging and
          accessible digital experiences. I have a strong background in
          developing user interfaces, integrating APIs, and ensuring application
          performance.
        </p>
        <div>
          <h3 style={styles.header3}>About the website</h3>
          <p style={styles.paragraph}>
            Welcome to our single-page application designed to enhance your
            culinary experience by bringing the menu of one store to your
            fingertips. This project utilizes a free public API from TheMealDB
            to fetch a variety of meals and offers a range of features to make
            meal selection enjoyable and personalized.
          </p>
          <h2 style={styles.header4}>Key Features:</h2>
          <ul style={styles.list}>
            <li>
              Navigation Bar: Easily navigate between Home, Menu, My Favourites,
              Meal Generator, and About Me pages.
            </li>
            <li>
              Store Home Page: Access the menu, view your favourite meals, or
              generate a random meal.
            </li>
            <li>
              About Me Page: Personal comments and information about the
              creator.
            </li>
            <li>Menu Page: Browse through different meal categories.</li>
            <li>
              Meals Page: View detailed information about meals, including
              images and names, and add or remove meals from your favourites
              list.
            </li>
            <li>
              Favorite Meals Page: See all your favourite meals with the option
              to remove them.
            </li>
            <li>
              Random Meal Generator: Discover a new meal at random and decide if
              you want to add it to your favourites.
            </li>
          </ul>
        </div>
        <div style={styles.contact}>
          <p>
            Email:{" "}
            <a href="mailto:abhijeet.butola@gmail.com">
              abhijeet.butola@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/abhijeetbutola"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhijeet Butola
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/abhijeetbutola"
              target="_blank"
              rel="noopener noreferrer"
            >
              abhijeetbutola
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.6",
  },
  header1: {
    fontSize: "2em",
    marginBottom: "10px",
  },
  header3: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  header4: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  contact: {
    fontSize: "14px",
    marginTop: "30px",
  },
  list: {
    fontSize: "14px",
    marginLeft: "20px",
    marginBottom: "10px",
  },
};

export default AboutMe;
