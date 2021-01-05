import Head from "next/head"
import A from "./A"

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"kek" + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={`/`} text="Главная"></A>
        <A href={`/users`} text="Пользователи"></A>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
