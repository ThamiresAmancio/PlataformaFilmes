import React from "react";
import { IconBack, IconNext } from "./style";

const Paginations = ({
  nextPage,
  backPage,
  currentPage,
  qtdItem,
  totalResults,
}) => {
  // variavél totalPages = que divide o totalResults com o qtdItem e soma 1
  const totalPages = Math.floor(totalResults / qtdItem + 1);

  return (
    <div className="newPagination">
      {currentPage > 1 && (
        <div onClick={() => backPage(currentPage)}>
          <IconNext />
        </div>
      )}
      <div className="text-page">
        {" "}
        {qtdItem * (currentPage - 1) + 1} de {totalResults}
      </div>
      {totalPages > currentPage && (
        <div onClick={() => nextPage(currentPage)}>
          <IconBack />
        </div>
      )}
    </div>
  );
};
export default Paginations;
