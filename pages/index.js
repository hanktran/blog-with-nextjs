import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-util";

const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Han's Blog</title>
        <meta
          name="description"
          content="This is a blog about web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Homepage;
