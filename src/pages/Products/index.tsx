import React from "react";
import { Stack, ListGroup } from "react-bootstrap";

import { useGetProductsQuery } from "../../services/productsApi";

const Products: React.FunctionComponent<any> = (): JSX.Element => {
  const { data, isSuccess, isLoading } = useGetProductsQuery({});
  return (
    <div className="justify-content-start">
      <h2 className=" fs-2 text-capitalize login-text">Products</h2>
      {isLoading ? <div className="align-self-center">Loading...</div> : null}
      {isSuccess && (
        <ListGroup>
          {data.map((product: any) => {
            return (
              <ListGroup.Item key={product.id}>
                <Stack
                  direction="horizontal"
                  className="justify-content-between"
                >
                  <span className="text-capitalize">
                    {`${product.title} - ${product.description}`}
                  </span>
                  <span>
                    {new Intl.NumberFormat("en-UK", {
                      style: "currency",
                      currency: "BDT",
                    }).format(product.price)}
                  </span>
                </Stack>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default Products;
