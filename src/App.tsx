import React, { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Votes from "./pages/Votes";
import Vote from "./pages/Vote";

const header = "Kilka słów o nas";
const header2 = "Czyli kim jesteśmy i dokąd zmierzamy";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id duinec quam bibendum ornare vitae id libero. Suspendisse potenti. Morbiegestas accumsan diam id interdum. Fusce tincidunt tortor eget mihendrerit, sed lacinia massa pellentesque. Donec ut suscipit mauris. Morbi ut enim ut magna aliquam facilisis vel sed sem. In auctor, arcuquis tempor facilisis, risus metus mollis libero, et blandit nibh mauris non dolor. Ut velit eros, condimentum vel lectus vitae, scelerisque ultrices felis. Maecenas faucibus finibus commodo. Curabitur non justo maximus felis aliquam dictum a eu turpis. Praesent posuere sagittis diam at sodales. Fusce sit amet consequat ipsum, ut auctor nibh. Nulla sit amet diam imperdiet, consectetur nunc pellentesque, porta nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nibh a enim aliquet luctus eu et turpis. Donec vel interdum turpis, vel egestas sem. Aenean volutpat tellus non magna malesuada fermentum. Curabitur vel ex accumsan, fermentum felis nec, eleifend dolor. Etiam scelerisque non diam sed consectetur. Sed sit amet risus vitae nisi condimentum pretium. Nulla facilisi. Praesent nec iaculis odio, vitae laoreet tortor. Vestibulum vel lorem purus. Cras ullamcorper dapibus molestie. Ut mi massa, mollis ac viverra laoreet, posuere sed nulla. Praesent leo nibh, pulvinar sit amet magna vel, consectetur mollis mauris. Pellentesque at magna ipsum. Donec ultrices bibendum eros eu pellentesque. Quisque porta ex mi, id ultrices odio fringilla nec. Nunc id aliquet lorem. Nunc aliquam risus non ex lobortis, a fermentum quam pharetra. Maecenas pharetra massa ac metus luctus sollicitudin eget eu turpis. Nunc egestas mattis mattis. Suspendisse potenti. Maecenas imperdiet interdum lacus quis vehicula. Donec a commodo orci. Donec vel velit eu ipsum rutrum consectetur vel sit amet quam.";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/votes" element={<Votes />} />
      {/* <Route path="/vote" element={<Vote />} /> */}
    </Routes>
  );
};

export default App;
