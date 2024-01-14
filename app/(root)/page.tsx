import Count from "./components/Count";
import Header from "./components/Header";
import Main from "./components/Main";

export default async function Home() {
  return (
    <>
      <Header />
      <Count/>
      <Main />
    </>
  )
}
