"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>Error: {error.message}</p>
        <button onClick={() => reset()}>Reset</button>
      </body>
    </html>
  );
}
