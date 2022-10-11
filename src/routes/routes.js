import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Quiz from "../components/Quiz/Quiz";
import Statistic from "../components/Statistic/Statistic";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import { loadTopicAndQuiz } from "../loader/loadTopicAndQuiz";

const router = createBrowserRouter([
    {path: '/', loader: loadTopicAndQuiz, element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {
            path: '/', element: <Hero></Hero>
        },
        {
            path: '/quiz/:id', loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), element: <Quiz></Quiz>
        },
        {
            path: '/statistic',
            element: <Statistic></Statistic>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]}
])


export default router;