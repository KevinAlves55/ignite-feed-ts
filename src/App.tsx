import "./styles/Global.css";
import Style from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89947057?v=4",
      name: "Kevin Alves Da Silva",
      role: "Front-End"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89947057?v=4",
      name: "Diego Andrade",
      role: "Back-End"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89947057?v=4",
      name: "Daniel De Carvalho",
      role: "SEO da Facebook"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-05-13 08:00:00")
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/89947057?v=4",
      name: "Maria Oliveira Da Silva",
      role: "Full stack"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCa" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-08-25 21:30:00")
  },
];

export const App = () => {
  return (
    <>
      <Header />

      <div className={Style.wrapper}>
        <Sidebar />

        <main>
          {post.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
};