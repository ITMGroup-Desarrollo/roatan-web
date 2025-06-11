import React, { useState } from "react";

const BlogSwiper = ({ posts, lang }) => {
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const toggleShare = (slug) => {
    const container = document.getElementById(`share-items-${slug}`);
    if (!container) return;

    const links = container.querySelectorAll(".share-link");

    if (container.classList.contains("hidden")) {
      container.classList.remove("hidden");
      container.classList.add("flex");

      for (let i = links.length - 1, delay = 0; i >= 0; i--, delay++) {
        const link = links[i];
        link.classList.remove("pop");
        link.style.animationDelay = `${delay * 100}ms`;
        void link.offsetWidth;
        link.classList.add("pop");
      }
    } else {
      container.classList.remove("flex");
      container.classList.add("hidden");

      links.forEach((link) => {
        link.classList.remove("pop");
        link.style.animationDelay = "";
      });
    }
  };

  return (
    <>
      <ul id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {currentPosts.map((post, index) => (
          <li
            key={post.slug}
            className={`Blog-item relative ${
              index === 0 ? "md:col-span-2" : "md:col-span-1"
            } bg-[var(--redSocial-color)] shadow-md rounded-xl`}
          >
            <div
              className={`flex flex-col z-10 ${
                index === 0 ? "md:flex-row" : ""
              } h-full`}
            >
              <a
                href={`/${lang}/blog/${post.slug}`}
                className={`${index === 0 ? "basis-1/2 md:pr-4" : ""}`}
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className={`w-full h-full object-cover rounded-t-xl ${
                    index === 0
                      ? "md:rounded-t-none md:rounded-tl-xl md:rounded-bl-xl"
                      : ""
                  }`}
                />
              </a>
              <div
                className={`${
                  index === 0 ? "basis-1/2" : ""
                } p-5 flex flex-col`}
              >
                <p className="text-justify font-latoBold text-[var(--darkblue-color)] text-2xl mb-4  uppercase">
                  {post.date}
                </p>
                <p className="text-left font-latoBold text-[var(--primary-color)] text-4xl md:text-7xl mb-4 uppercase">
                  {post.title}
                </p>
                <p
                  className="text-justify text-2xl pb-8"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <a
                  href={`/${lang}/blog/${post.slug}`}
                  class="text-[var(--primary-color)] md:text-2xl border-2 border-[var(--primary-color)] self-start p-2 rounded-lg w-fit uppercase text-base font hover:bg-white hover:border-white hover:text-[var(--darkblue-color)]"
                >
                  {lang === "es" ? "Leer más" : "Read more"} &raquo;
                </a>
              </div>
            </div>
            <div className="share-container absolute bottom-4 right-5 z-20 flex flex-row-reverse">
              <button
                onClick={() => toggleShare(post.slug)}
                className="h-[32px]"
              >
                <img
                  src="/img/iconos/share.svg"
                  alt="share"
                  className="w-6 self-center"
                />
              </button>
              <div
                id={`share-items-${post.slug}`}
                className="share-items hidden flex-row"
              >
                <a
                  href={`https://api.whatsapp.com/send?text=https://roatan-web.netlify.app/${lang}/blog/${post.slug}`}
                  className="share-link"
                >
                  <img
                    src="/img/iconos/shareWP.svg"
                    alt="WP icon"
                    className="w-8 mr-4"
                  />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://roatan-web.netlify.app/${lang}/blog/${post.slug}`}
                  className="share-link"
                >
                  <img
                    src="/img/iconos/shareX.svg"
                    alt="X icon"
                    className="w-8 mr-4"
                  />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://roatan-web.netlify.app/${lang}/blog/${post.slug}`}
                  className="share-link"
                >
                  <img
                    src="/img/iconos/shareFB.svg"
                    alt="FB icon"
                    className="w-8 mr-4"
                  />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination flex justify-center space-x-2 mb-8">
        {/* Botón de página anterior "<" */}
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 text-2xl font-latoBold rounded text-[var(--primary-color)] hover:underline hover:underline-offset-2 hover:decoration-2"
          >
            &lt;
          </button>
        )}

        {/* Botones de número de página */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 text-xl font-latoBold rounded hover:underline hover:underline-offset-2 hover:decoration-2 focus:underline focus:underline-offset-2 focus:decoration-2 ${
              currentPage === i + 1
                ? " text-[var(--primary-color)] "
                : " text-[var(--primary-color)] "
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Botón de página siguiente ">" */}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 text-2xl font-latoBold rounded text-[var(--primary-color)] hover:underline hover:underline-offset-2 hover:decoration-2"
          >
            &gt;
          </button>
        )}
      </div>
    </>
  );
};

export default BlogSwiper;
