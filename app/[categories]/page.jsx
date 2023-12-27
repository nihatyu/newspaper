import CardLayout from "../ui/card-layout";

const Page = ({ params }) => {
  const param = params.categories;

  return (
    <>
      <CardLayout categoryPath={param} />
    </>
  );
};

export default Page;
