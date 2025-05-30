import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./store/UsersContext";
import { PostsProvider } from "./store/PostsContext";
import { Routes, Route } from "react-router-dom";
import { NewPostPage } from "./pages/NewPostPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { PostsPage } from "./pages/PostsPage";
import { UsersPage } from "./pages/UsersPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { App } from "./App";

export const Root = () => (
  <BrowserRouter>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="users" >
              <Route path=":userId?" element={<UsersPage />} />
            </Route>
            <Route path="posts">
              <Route index element={<PostsPage />} />
              <Route path=":postId" element={<PostDetailsPage />} />
              <Route path="new" element={<NewPostPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PostsProvider>
    </UsersProvider>
  </BrowserRouter>
);
