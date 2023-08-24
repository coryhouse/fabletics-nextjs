import { Review } from "@/mocks/reviews.mocks";

export default async function Reviews({ productId }: { productId: number }) {
  const resp = await fetch("http://localhost:3000/api/reviews/" + productId);
  const reviews = (await resp.json()) as Review[];

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </>
  );
}
