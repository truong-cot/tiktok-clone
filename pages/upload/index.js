import DefaultLayout from '../../components/layout/DefaultLayout';

function Upload() {
  return <div>Upload</div>;
}

export default Upload;

Upload.Layout = function LayoutPage() {
  return (
    <DefaultLayout header={true} sidebar={false}>
      <Upload />
    </DefaultLayout>
  );
};
