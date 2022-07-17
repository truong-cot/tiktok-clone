import Layout from './../../components/layout';

function Feedback() {
  return <h2>Feedback</h2>;
}

export default Feedback;

Feedback.Layout = function LayoutPage() {
  return (
    <Layout header={true} sidebar={false}>
      <Feedback />
    </Layout>
  );
};
