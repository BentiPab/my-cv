const CommonExpProjLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-5 px-14 ">
      <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-6">
        {children}
      </div>
    </section>
  );
};

export default CommonExpProjLayout;
