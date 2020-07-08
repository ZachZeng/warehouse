import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numOfPages
  const prevPage = `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  return (
    <Pagination aria-label="Page navigation">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href="/"></PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous href={prevPage} />
        </PaginationItem>
      )}

      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href="/" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
