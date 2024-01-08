interface CategoryHeaderProps {
  title: string;
}

export const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <>
      <hr />
      <p>{title}</p>
    </>
  );
};
