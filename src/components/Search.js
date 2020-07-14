import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Posts, PostCard } from "../components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import { PostsWrapper, SearchbarWrapper, H2 } from "../elements"

export const Search = ({ posts, location }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    JSON.parse(localSearchPages.store)
  )

  return (
    <>
      <SearchbarWrapper>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(e.target.value ? `/blog/?search=${e.target.value}` : "")
            setQuery(e.target.value)
          }}
        />
      </SearchbarWrapper>

      {query ? (
        results.length > 0 ? (
          <PostsWrapper>
            {results.map(d => (
              <PostCard
                key={d.id}
                title={d.title}
                slug={d.slug}
                date={d.date}
                tags={d.tags}
              />
            ))}
          </PostsWrapper>
        ) : (
          <H2>
            Sorry, nothing is found... please search for another word like
            "react"{" "}
          </H2>
        )
      ) : (
        <Posts data={posts} />
      )}
    </>
  )
}
