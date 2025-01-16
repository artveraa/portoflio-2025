const Experiences = () => {
  const date: Date = new Date();
  const month: string = date.toLocaleString("default", { month: "short" });
  const year: number = date.getFullYear();

  return (
    <div className="px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-5 bg-main text-dark z-10 sticky top-[45%] rounded-t-3xl ">
      <p className="text-lg md:text-2xl">Expériences</p>
      <div className="flex flex-col items-start gap-7">
        <div className="flex justify-between items-center w-full border-b border-dark pb-5 text-lg">
          <span>Vous ? 🤩</span>
          <span>{`${month} ${year}`} - ...</span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-dark pb-5 text-lg">
          <span>Agence Océbo</span>
          <span>déc. 2023 - août. 2024</span>
        </div>
        <div className="flex justify-between items-center w-full border-b border-dark pb-5 text-lg">
          <span>Agence Mcube</span>
          <span>sept. 2020 - sept. 2023</span>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
