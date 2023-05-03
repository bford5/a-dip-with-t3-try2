type PostType = {
  post: {
    id: string;
    userAuthorName: string;
    content: string;
  };
  author: any;
};

export default function HomepageReviews({ data }: { data: PostType[] }) {
  return (
    <>
      {[...data]?.map(({ post, author }) => {
        return (
          <div
            key={post.id}
            className=" mx-auto my-2 w-4/5 rounded-md border-2 border-black text-center"
          >
            <h2>{post.userAuthorName}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </>
  );
}
