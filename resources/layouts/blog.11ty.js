exports.data = {
  layout: 'base',
};

exports.render = function(data) {
  return `<h1>${data.title}</h1>
  <h4>${this.toReadableDate(data.date)}</h4>
  ${data.content || data.site.safe}`;
};

// export default (props) => (
//   <Layout>
//     <h2>{props.data.markdownRemark.frontmatter.title}</h2>
//     <h4>{props.data.markdownRemark.frontmatter.date}</h4>
//     <div
//       className="post"
//       dangerouslySetInnerHTML={{
//         __html: props.data.markdownRemark.html,
//       }}
//     />
//   </Layout>
// );

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `;
