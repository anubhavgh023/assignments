import { useState } from "react";

const USER = {
  username: "Lokeshwar",
  desc: "A TA in the 100xDevs Cohort 2.0",
  interests: ["Ionic", "Open Source", "App Dev", "web 3"],
};

const USER2 = {
  username: "Rakesh",
  desc: "Open source readme file contributor",
  interests: ["HTML","CSS","JS","VSCODE"],
};

function App() {
  return (
    <>
      <div className="screen">
        <BusinessCardContainer user={USER}></BusinessCardContainer>
        <BusinessCardContainer user={USER2}></BusinessCardContainer>
      </div>
    </>
  );
}

function BusinessCardContainer({ user }) {
  console.log(user);
  return (
    <div className="container">
      <Username username={user.username}></Username>
      <Description desc={user.desc}></Description>
      <Interests interests={user.interests}></Interests>
      <SocialLinkButtons></SocialLinkButtons>
    </div>
  );
}

function Username({ username }) {
  console.log(username);
  return (
    <div>
      <h2>{username}</h2>
    </div>
  );
}

function Description({ desc }) {
  return (
    <div>
      <h3>{desc}</h3>
    </div>
  );
}

function Interests({ interests }) {
  const interestRows = interests.map((interest) => {
    return <li key={interest}>{interest}</li>;
  });
  return (
    <div>
      <h3>Interest</h3>
      <ul>{interestRows}</ul>
    </div>
  );
}

function SocialLinkButtons() {
  return (
    <div>
      <button className="social-btn">LinkedIn</button>
      <button className="social-btn">Twitter</button>
    </div>
  );
}

export default App;
