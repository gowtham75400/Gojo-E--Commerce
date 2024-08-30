import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <div>
      <h1 className="text-pink-600 flex justify-center text-5xl font-mono font-bold">GO <span className="text-white" >JO  </span> ST<span className="text-white">OR</span>E</h1>
      <div className="mt-10 w-full overflow-hidden">
        {!keyword ? <Header /> : null}
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Message variant="danger">
            {isError?.data.message || isError.error}
          </Message>
        ) : (
          <>
            <div className="flex justify-between items-center ">
              <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
                Special Products
              </h1>

              <Link
                to="/shop"
                className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
              >
                Shop
              </Link>
            </div>

            <div>
              <div className="flex justify-center flex-wrap mt-[2rem]">
                {data.products.map((product) => (
                  <div key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
