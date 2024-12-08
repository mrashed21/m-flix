import { Helmet } from "react-helmet-async";

const CommingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Up Comming</title>
      </Helmet>
      <div className=" bg-purple-100 p-10">
        <h2 className="text-2xl font-bold">Comming Soon Movies...</h2>
        <div className=" min-h-screen  flex items-center justify-center">
          <h2 className=" font-Roboto text-4xl font-semibold">
            {" "}
            No Movies Found Right Now!
          </h2>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
