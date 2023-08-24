import { sleep } from "@/utils/sleep";

export default async function HomeBanner2() {
  await sleep(2000);
  return <h2>Home Banner 2</h2>;
}
