import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Link from '../components/Link'
import Section from '../components/Section'
import InstagramFeed from '../components/InstagramFeed'
import { H1, H2, H3, Excerpt, Text } from '../components/Text'
import { Grid, Column } from '../components/Grid'
import { colors } from '../style'
import getMetaFromPost from '../lib/getMetaFromPost'

export default function Career({ data }) {
  const { contact, spontaneousTitle, page, secondHeader } = data.page
  const hasOpenPositions = !!data.allContentfulPositions.edges.length

  return (
    <Layout meta={getMetaFromPost()}>
      <Hero pb={0} keepContentMargin>
        <H1>{page.title}</H1>
        {page.excerpt && <Excerpt>{page.excerpt.excerpt}</Excerpt>}
      </Hero>
      {hasOpenPositions && (
        <Section bg={colors.dark} py={[5, 7]}>
          <Grid>
            <Column>
              <H2 textColor="white" mb={[3, 4]}>
                {secondHeader}
              </H2>
              <ul>
                {data.allContentfulPositions.edges.map(({ node }) => (
                  <li key={node.id}>
                    <Excerpt mb={[2, 3]}>
                      <Link to={`join-us/${node.slug}`} colorVariant="white">
                        {node.role}
                      </Link>
                    </Excerpt>
                  </li>
                ))}
              </ul>
            </Column>
          </Grid>
        </Section>
      )}
      <Section pt={hasOpenPositions ? [5, 7] : 0}>
        <Grid>
          <Column>
            <H3>{spontaneousTitle}</H3>
            <Text>
              <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            </Text>
          </Column>
        </Grid>
      </Section>
      <Section bg={colors.dark} pt="0" mt={[8, 24]} pb={[12, 36]}>
        <InstagramFeed />
      </Section>
    </Layout>
  )
}
// Todo add meta

export const pageQuery = graphql`
  query($slug: String!) {
    page: contentfulCareer(page: { slug: { eq: $slug } }) {
      contact {
        email
      }
      spontaneousTitle
      secondHeader
      page {
        title
        slug
        excerpt {
          excerpt
        }
      }
    }

    allContentfulPositions {
      edges {
        node {
          id
          role
          slug
        }
      }
    }
  }
`
