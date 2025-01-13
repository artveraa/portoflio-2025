import Image from "next/image";

const AnimatedImages = () => {
  return (
    <div className="w-[400px] aspect-[1/1.5] absolute left-[50%] translate-x-[-50%] bottom-[-25%]">
      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] object-cover"
      />

      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] object-cover"
      />

      <Image
        src="/arthurvera.jpg"
        alt="Arthur Vera"
        width={918}
        height={928}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] object-cover"
      />
    </div>
  );
};
export default AnimatedImages;
