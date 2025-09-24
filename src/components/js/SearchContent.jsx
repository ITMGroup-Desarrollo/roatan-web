import { useState, useEffect } from "react";

export default function SearchContent({ lang, content }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleInput = (e) => {
    const val = e.target.value.toLowerCase();
    setQuery(val);

    if (val.length >= 2) {
      const results = content.filter((item) => {
        const matchSlug = item.slug.toLowerCase().includes(val);
        const matchTags = item.tags.some((tag) =>
          tag.toLowerCase().includes(val)
        );
        return matchSlug || matchTags;
      });
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="pb-1 relative search_container">
      <input
        className="search_input font text-xs italic uppercase mx-3 rounded-full border-2 border-white w-auto py-1 px-2"
        placeholder="What to find?"
        value={query}
        onChange={handleInput}
      />
      <img
        className="absolute right-6 top-1.5"
        src="/img/iconos/lupa.svg"
        alt="lupa"
        width="15"
        height="15"
        loading="eager"
      />
      {filtered.length > 0 && (
        <ul className="absolute left-3 bg-white text-black mt-2 w-[87%] z-10 rounded-2xl shadow-md max-h-60 overflow-y-auto no-scrollbar">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-3 py-1 hover:bg-gray-200 cursor-pointer text-sm"
              onClick={() =>
                (window.location.href = `/${lang}/${item.category}/${item.slug}`)
              }
            >
              {item.title
                .replace(/&nbsp;/g, " ")
                .replace(/<br>/g, " ")
                .replace(/<br\s+class="hidden\s+md:block"\s*\/?>/g, "")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
