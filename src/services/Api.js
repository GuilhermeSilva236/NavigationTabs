
import axios from 'axios';

const UsersApi = axios.create({
  baseURL: 'https://dummyjson.com/users'
});

const PostsApi = axios.create({
  baseURL: 'https://dummyjson.com/posts'
});

export { UsersApi, PostsApi };
