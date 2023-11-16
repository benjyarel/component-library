interface CategoryHeaderProps {
  title: string;
}

export const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <>
      <p>{title}</p>
      <hr />
    </>
  );
};
