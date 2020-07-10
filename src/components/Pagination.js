import React from "react"
import { Link } from "gatsby"
import { PaginationWrapper } from "../elements"

export const Pagination = ({ currentPage, numOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numOfPages
  const prevPage = `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  return (
    <PaginationWrapper>
      {isFirst ? (
        <Link previous href="/"></Link>
      ) : (
        <Link previous href={prevPage} />
      )}

      {isLast ? <Link next href="/" /> : <Link next href={nextPage} />}
    </PaginationWrapper>
  )
}
