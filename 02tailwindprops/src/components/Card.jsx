import React from 'react'
// this lesson is about props
// props are the way to pass data from parent to child
// props are used to communicate between components

// this lessson is about tailwindcss
// tailwindcss is a utility-first css framework
// it is a css framework that is composed of utility classes



function Card({username='Batman',
 title='Not assiged yet', 
 post='"Tailwind CSS is the only framework that I\'ve seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny."',
 imageUrl="https://www.xtrafondos.com/wallpapers/vertical/pelicula-the-batman-6245.jpg"}) {
  // console.log(props)
// Passing in default

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imageUrl}/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {post}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {title}
      </div>
    </figcaption>
  </div>
</figure>
      <div>
       
      </div>
    </div>
  )
}

export default Card
