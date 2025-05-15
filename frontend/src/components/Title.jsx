const Title = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20">
      <h1 className="relative text-[30px] text-[#fafafa] font-semibold mb-4 before:content-[''] before:absolute before:w-[33px] before:h-[4px] before:bg-[#f67655] before:rounded-4xl before:bottom-0 lg:text-4xl">
        {title}
      </h1>
      <p className="text-[#a1a1aa] px-6 text-center md:p-0 md:w-1/2 lg:text-base">{paragraph}</p>
    </div>
  );
};

export default Title;
