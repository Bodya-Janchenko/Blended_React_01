import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const logThreePosts = async () => {
  const Post = await fetchPosts();
  for (let i = 0; i < 3; i++) {
    console.log(Post[i].title && Post[i].body);
  }
};

logThreePosts();
