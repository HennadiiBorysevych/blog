import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
export const GET_POSTS = gql`
  query getPosts {
    body
    id
    createdAt
    username
    likeCount
    likes {
      username
    }
    commentCount
    comments {
      id
      createdAt
      username
      body
    }
  }
`;

const Home = () => {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(GET_POSTS);

  return (
    <div>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Posts</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1>Loadind posts...</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
