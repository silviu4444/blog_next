import Head from "next/head";
import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFilenames } from "../../lib/posts-util";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostDetailPage;

export function getStaticPaths() {
  const postFilenames = getPostsFilenames();

  const slugs = postFilenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, "") },
  }));

  return {
    paths: slugs,
    fallback: false,
  };

  // or

  // return {
  //   paths: [],
  //   fallback: true,
  // //fallback: 'blocking'
  // };
}

export function getStaticProps({ params }) {
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
}
