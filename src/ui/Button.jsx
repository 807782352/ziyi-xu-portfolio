export default function Button({ type, children }) {
  const BASE_STYLE = "yellow-red rounded-full font-semibold";

  if (type === "primary-full") {
    const primaryStyle =
      BASE_STYLE + " mr-4  w-full mb-4 text-black px-6 py-3 sm:mb-0 sm:py-0";
    return <button className={primaryStyle}>{children}</button>;
  }

  if (type === "primary") {
    const primaryStyle = BASE_STYLE + " inline-block rounded-lg text-black px-4 py-3 sm:mb-0 ";
    return <button className={primaryStyle}>{children}</button>;
  }

  if (type === "horrow") {
    const horrowStyle = BASE_STYLE + " mr-4  w-full text-white px-1 py-1";
    return <button className={horrowStyle}>{children}</button>;
  }

  return null;
}
