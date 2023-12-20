import React from "react";
import { graphql, PageProps } from "gatsby";

import GreetingCard from "../components/02-molecules/GreetingCard";
import LatestArticle from "../components/03-organisms/LatestArticle";
import LatestProject from "../components/03-organisms/LatestProject";
import Navbar from "../components/03-organisms/Navbar";
import Footer from "../components/03-organisms/Footer";

import { publications } from "../../content/publications";

const LIMIT_LATEST_ARTICLES = 5;

interface IndexPageProps {
  latestPosts: {
    nodes: {
      fields: {
        slug: string;
        date: string;
      };
      frontmatter: {
        title: string;
        description: string;
        category: string;
      };
    }[];
  };
  latestProjects: {
    nodes: {
      fields: {
        slug: string;
        date: string;
      };
      frontmatter: {
        title: string;
        description: string;
        demoLink: string;
      };
    }[];
  };
}

const IndexPage = ({ data }: PageProps<IndexPageProps>) => {
  const latestArticles = data.latestPosts.nodes.map((node) => ({
    title: node.frontmatter.title,
    date: node.fields.date,
    slug: node.fields.slug,
  }));

  const latestProjects = data.latestProjects.nodes.map((node) => ({
    title: node.frontmatter.title,
    slug: node.fields.slug,
    description: node.frontmatter.description,
    demoLink: node.frontmatter.demoLink,
  }));

  const latestPublications = publications.slice(0, LIMIT_LATEST_ARTICLES);

  return (
    <div className="mb-10">
      <Navbar isBorderBottomVisible={false} />

      <div className="container mx-auto mt-5">
        <GreetingCard />

        <LatestArticle
          sectionTitle="Artikel Terbaru"
          articles={latestArticles}
          className="mt-14"
          seeAllLink="/blog"
        />

        <LatestArticle
          sectionTitle="Publikasi"
          articles={latestPublications}
          className="mt-14"
          seeAllLink="/publications"
        />

        <LatestProject
          projects={latestProjects}
          className="mt-14"
          seeAllLink="/projects"
        />

        <Footer />
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    latestPosts: allMarkdownRemark(
      sort: { fields: { date: DESC } }
      filter: { frontmatter: { category: { eq: "blog" } } }
      limit: 5
    ) {
      nodes {
        fields {
          slug
          date(formatString: "DD MMMM YYYY")
        }
        frontmatter {
          title
          description
          category
        }
      }
    }
    latestProjects: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
      limit: 5
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          demoLink
        }
      }
    }
  }
`;

export default IndexPage;