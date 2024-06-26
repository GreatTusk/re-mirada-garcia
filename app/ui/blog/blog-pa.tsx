import { Cartablog } from "@/app/lib/definitions";
import Image from "next/image";

export default async function Blog({ blog }: { blog: Cartablog }) {
  return (
    <main className="pt-16 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  src="/logo.png"
                  alt="Dario"
                  width={64}
                  height={64}
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Darío García
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Fotógrafo profesional
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      {blog.fechapub}
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {blog.titulo}
            </h1>
          </header>
          {/*Bajada de titulo*/}
          <p className="lead">{blog.bajadaTitulo}</p>
          <figure>
            <Image
              src="https://picsum.photos/1920/1080"
              alt="Imagen del día"
              width={1920}
              height={1080}
              className={"rounded-lg"}
              placeholder="blur"
              blurDataURL="/carousel-fallback.svg"
            />
            <figcaption>La foto del día</figcaption>
          </figure>
          {blog.secciones.map((post) => (
            <div key={post.titulo}>
              <h2>{post.titulo}</h2>
              {post.parrafos &&
                post.parrafos.map((parrafo, index) => (
                  <p key={index}>{parrafo}</p>
                ))}
              {post.imagen && (
                <figure>
                  <Image
                    src={post.imagen.src}
                    alt={post.imagen.alt}
                    width={post.imagen.width}
                    height={post.imagen.height}
                    className={post.imagen.className}
                    placeholder="blur"
                    blurDataURL="/carousel-fallback.svg"
                  />
                  <figcaption>{post.imagen.caption}</figcaption>
                </figure>
              )}
              {post.lista && (
                <ul>
                  {post.lista.map((item, index) => (
                    <li key={index}>
                      <strong>{item.titulo}: </strong>
                      {item.texto}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/*<h2>Getting started with Flowbite</h2>*/}
          {/*<p>*/}
          {/*  First of all you need to understand how Flowbite works. This library*/}
          {/*  is not another framework. Rather, it is a set of components based on*/}
          {/*  Tailwind CSS that you can just copy-paste from the documentation.*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  It also includes a JavaScript file that enables interactive*/}
          {/*  components, such as modals, dropdowns, and datepickers which you can*/}
          {/*  optionally include into your project via CDN or NPM.*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  You can check out the{" "}*/}
          {/*  <a href="https://flowbite.com/docs/getting-started/quickstart/">*/}
          {/*    quickstart guide*/}
          {/*  </a>{" "}*/}
          {/*  to explore the elements by including the CDN files into your*/}
          {/*  project. But if you want to build a project with Flowbite I*/}
          {/*  recommend you to follow the build tools steps so that you can purge*/}
          {/*  and minify the generated CSS.*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  Youll also receive a lot of useful application UI, marketing UI, and*/}
          {/*  e-commerce pages that can help you get started with your projects*/}
          {/*  even faster. You can check out this{" "}*/}
          {/*  <a href="https://flowbite.com/docs/components/tables/">*/}
          {/*    comparison table*/}
          {/*  </a>{" "}*/}
          {/*  to better understand the differences between the open-source and pro*/}
          {/*  version of Flowbite.*/}
          {/*</p>*/}
          {/*<h2>When does design come in handy?</h2>*/}
          {/*<p>*/}
          {/*  While it might seem like extra work at a first glance, here are some*/}
          {/*  key moments in which prototyping will come in handy:*/}
          {/*</p>*/}
          {/*<ol>*/}
          {/*  <li>*/}
          {/*    <strong>Usability testing</strong>. Does your user know how to*/}
          {/*    exit out of screens? Can they follow your intended user journey*/}
          {/*    and buy something from the site you’ve designed? By running a*/}
          {/*    usability test, you’ll be able to see how users will interact with*/}
          {/*    your design once it’s live;*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <strong>Involving stakeholders</strong>. Need to check if your*/}
          {/*    GDPR consent boxes are displaying properly? Pass your prototype to*/}
          {/*    your data protection team and they can test it for real;*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <strong>Impressing a client</strong>. Prototypes can help explain*/}
          {/*    or even sell your idea by providing your client with a hands-on*/}
          {/*    experience;*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <strong>Communicating your vision</strong>. By using an*/}
          {/*    interactive medium to preview and test design elements, designers*/}
          {/*    and developers can understand each other — and the project —*/}
          {/*    better.*/}
          {/*  </li>*/}
          {/*</ol>*/}
          {/*<h3>Laying the groundwork for best design</h3>*/}
          {/*<p>*/}
          {/*  Before going digital, you might benefit from scribbling down some*/}
          {/*  ideas in a sketchbook. This way, you can think things through before*/}
          {/*  committing to an actual design project.*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  Let us start by including the CSS file inside the <code>head</code>{" "}*/}
          {/*  tag of your HTML.*/}
          {/*</p>*/}
          {/*<h3>Understanding typography</h3>*/}
          {/*<h4>Type properties</h4>*/}
          {/*<p>*/}
          {/*  A typeface is a collection of letters. While each letter is unique,*/}
          {/*  certain shapes are shared across letters. A typeface represents*/}
          {/*  shared patterns across a collection of letters.*/}
          {/*</p>*/}
          {/*<h4>Baseline</h4>*/}
          {/*<p>*/}
          {/*  A typeface is a collection of letters. While each letter is unique,*/}
          {/*  certain shapes are shared across letters. A typeface represents*/}
          {/*  shared patterns across a collection of letters.*/}
          {/*</p>*/}
          {/*<h4>Measurement from the baseline</h4>*/}
          {/*<p>*/}
          {/*  A typeface is a collection of letters. While each letter is unique,*/}
          {/*  certain shapes are shared across letters. A typeface represents*/}
          {/*  shared patterns across a collection of letters.*/}
          {/*</p>*/}
          {/*<h3>Type classification</h3>*/}
          {/*<h4>Serif</h4>*/}
          {/*<p>*/}
          {/*  A serif is a small shape or projection that appears at the beginning*/}
          {/*  or end of a stroke on a letter. Typefaces with serifs are called*/}
          {/*  serif typefaces. Serif fonts are classified as one of the following:*/}
          {/*</p>*/}
          {/*<h4>Old-Style serifs</h4>*/}
          {/*<ul>*/}
          {/*  <li>Low contrast between thick and thin strokes</li>*/}
          {/*  <li>Diagonal stress in the strokes</li>*/}
          {/*  <li>Slanted serifs on lower-case ascenders</li>*/}
          {/*</ul>*/}
          {/*<Image*/}
          {/*  src="/img/fotos-matrimonio/6.jpg"*/}
          {/*  alt=""*/}
          {/*  width={1920}*/}
          {/*  height={1280}*/}
          {/*  className={"rounded-lg"}*/}
          {/*/>*/}
          {/*<ol>*/}
          {/*  <li>Low contrast between thick and thin strokes</li>*/}
          {/*  <li>Diagonal stress in the strokes</li>*/}
          {/*  <li>Slanted serifs on lower-case ascenders</li>*/}
          {/*</ol>*/}
          {/*<h3>Laying the best for successful prototyping</h3>*/}
          {/*<p>*/}
          {/*  A serif is a small shape or projection that appears at the*/}
          {/*  beginning:*/}
          {/*</p>*/}
          {blog.cita && (
            <blockquote>
              <p>{blog.cita}</p>
              <span>- Darío García</span>
            </blockquote>
          )}
        </article>
      </div>
    </main>
  );
}
