import Layout from '../../components/layout';

function Upload() {
  return <div>Upload</div>;
}

export default Upload;

Upload.Layout = function LayoutPage() {
  return (
    <Layout header={true} sidebar={false}>
      <Upload />
    </Layout>
  );
};
