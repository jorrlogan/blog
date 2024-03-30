import Header from "./components/header";

const posts = [
  {
    id: 1,
    title: "Big Browns on the Strawberry River",
    href: "#",
    description:
      "On a summer July day, it's commonplace to see large browns rise up and down along the Strawberry River",
    imageUrl: "/big_brown.png",
    date: "July 2023",
    datetime: "2020-03-16",
    readtime: "8 Min Read",
    likes: "104 Likes",
    author: {
      name: "Logan Orr",
      imageUrl: "/profile_pic_2.png",
    },
  },
  {
    id: 1,
    title: "Bell Canyon's Giants ",
    href: "#",
    description:
      "Bell Canyon resevoir might be considered a hiking destination, but few know about the monsters living in the tiny resevoir everyone is hiking past",
    imageUrl: "/cutty.png",
    date: "August 2023",
    datetime: "2020-03-16",
    readtime: "3 Min Read",
    likes: "96 Likes",
    author: {
      name: "Logan Orr",
      imageUrl: "/profile_pic_2.png",
    },
  },
  {
    id: 1,
    title: "Wild Rainbows of the Provo",
    href: "#",
    description:
      "The headwaters of the Provo are made up of small streams, some of which only run during the spring and early summer. If you time it right",
    imageUrl: "/rainbow.png",
    date: "May 2023",
    datetime: "2020-03-16",
    readtime: "6 Min Read",
    likes: "92 Likes",
    author: {
      name: "Logan Orr",
      imageUrl: "/profile_pic_2.png",
    },
  },
  {
    id: 1,
    title: "Tiny Stream Tiny Fish",
    href: "#",
    description:
      "It just looked like a small stream when I stumbled across it. I could jump over the entire thing without getting wet",
    imageUrl: "/tiny_fish.png",
    date: "July 2022",
    datetime: "2020-03-16",
    readtime: "12 Min Read",
    likes: "198 Likes",
    author: {
      name: "Logan Orr",
      imageUrl: "/profile_pic_2.png",
    },
  },
  {
    id: 1,
    title: "There are Tigers in these Woods",
    href: "#",
    description: "I only got a picture of the small one",
    imageUrl: "/tiger.png",
    date: "June, 2022",
    datetime: "2020-03-16",
    readtime: "2 min Read",
    likes: "37 Likes",
    author: {
      name: "Logan Orr",
      imageUrl: "/profile_pic_2.png",
    },
  },
];

export default function Home() {
  return (
    <div className="sm:px-4 pt-8 min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-none auto-rows-fr grid-cols-1 gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 pt-[300px] lg:pt-[500px]"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/700 md:via-gray-900/400" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-4 w-full sm:w-auto">
                  {post.date}
                </time>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50 mr-4 hidden sm:block">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="mr-4 flex items-center gap-x-4 w-full sm:w-auto">
                  <div className="flex gap-x-2.5">
                    <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div>
                </div>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50 mr-4 hidden sm:block">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="mr-4 w-full sm:w-auto">{post.readtime}</p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-white/50 mr-4 hidden sm:block">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="mr-4 w-full sm:w-auto">{post.likes}</p>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="text-white py-2">{post.description}...</p>
            </article>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center p-12">
        <p>© 2024 Utah Fishing Adventures Blog</p>
      </div>
    </div>
  );
}
