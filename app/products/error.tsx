"use client";

type ProductsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductsError({ error, reset }: ProductsErrorProps) {
  return (
    <html>
      <body>
        <h2>Oops! We couldn&apos;t load products :(</h2>
        <p>Error: {error.message}</p>
        <button onClick={() => reset()}>Reset</button>
      </body>
    </html>
  );
}
