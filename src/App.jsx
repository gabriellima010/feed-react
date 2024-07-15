import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Gabriel Lima',
      role: 'Web Developer Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-07-03 10:30:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Danilo Lima',
      role: 'Web Developer Senior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-07-03 10:35:00'),
  },
];

export function App() {

  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>           
      
      {posts.map(post => {
        return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
      })}

      </main>
    </div>

   </div>
  )
}