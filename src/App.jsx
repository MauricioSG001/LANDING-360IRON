import { useState } from 'react'

const heroImages = [
  '/images/hero-main.jpg',
  '/images/hero-side-1.jpg',
  '/images/hero-side-2.jpg',
]

const urbanCategories = [
  {
    id: 'bancas',
    title: 'Escanos y Bancas',
    button: 'Ver modelo',
    heading: 'Mobiliario Urbano',
    accent: 'Urbano',
    description:
      'Bancas de acero y madera para plazas, parques y espacios publicos con alta resistencia al uso diario.',
    image: '/images/urban-bench.jpg',
  },
  {
    id: 'bolardos',
    title: 'Bolardos',
    button: 'Ver modelo',
    heading: 'Control de Acceso',
    accent: 'Bolardos',
    description:
      'Bolardos metalicos para ordenar flujo peatonal y vehicular con presencia sobria y acabado durable.',
    image: '/images/urban-bollard.jpg',
  },
  {
    id: 'bicicleteros',
    title: 'Bicicleteros',
    button: 'Ver modelo',
    heading: 'Estaciones para',
    accent: 'Bicicletas',
    description:
      'Bicicleteros en acero pensados para espacios urbanos, conjuntos residenciales y proyectos comerciales.',
    image: '/images/urban-bike-rack.jpg',
  },
  {
    id: 'basureros',
    title: 'Basureros',
    button: 'Ver modelo',
    heading: 'Limpieza y',
    accent: 'Orden',
    description:
      'Basureros urbanos robustos para exterior, fabricados para soportar clima, uso intensivo y facil mantencion.',
    image: '/images/urban-trash-can.jpg',
  },
]

const residentialCategories = [
  {
    id: 'escaleras',
    title: 'Escaleras Estructurales',
    label: 'Escalera',
    description:
      'Escaleras metalicas modernas con estructura firme, lineas limpias y terminaciones a medida para interiores y exteriores.',
    images: ['/images/stairs-1.jpg', '/images/stairs-2.jpg'],
  },
  {
    id: 'puertas',
    title: 'Puertas de Acceso',
    label: 'Puerta',
    description:
      'Puertas metalicas con enfoque en seguridad, presencia arquitectonica y acabados resistentes para entradas principales.',
    images: ['/images/door-1.jpg', '/images/door-2.jpg'],
  },
  {
    id: 'rejas',
    title: 'Rejas y Portones',
    label: 'Rejas',
    description:
      'Rejas y portones fabricados a medida para viviendas, condominios y accesos que requieren seguridad sin perder diseno.',
    images: ['/images/gate-1.jpg', '/images/gate-2.jpg'],
  },
]

const furnitureCategories = [
  {
    id: 'comedor',
    title: 'Mesas de Comedor',
    description: 'Estilo industrial para tu hogar.',
    image: '/images/furniture-dining.jpg',
  },
  {
    id: 'terrazas',
    title: 'Terrazas',
    description: 'Resistencia para el exterior.',
    image: '/images/furniture-terrace.jpg',
  },
]

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Mobiliario Urbano', href: '#urbano' },
  { label: 'Casa & Complemento', href: '#casa' },
  { label: 'Muebles', href: '#muebles' },
]

function App() {
  const [activeUrban, setActiveUrban] = useState(urbanCategories[0])
  const [activeResidential, setActiveResidential] = useState(
    residentialCategories[0],
  )

  return (
    <div className="bg-slate-50 text-slate-700">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:flex-nowrap sm:px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
            <span className="text-[2rem] font-black leading-none tracking-[-0.08em] text-slate-900 sm:text-[2.6rem]">
              360
            </span>
            <span className="border-2 border-red-500 px-2 py-1 text-[1.5rem] font-black leading-none tracking-[-0.08em] text-red-500 sm:text-[2rem]">
              IRON
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.22em] text-slate-500 md:block">
              Proyectos de Acero
            </span>
          </a>

          <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-bold text-slate-700 sm:gap-5 lg:gap-10 lg:text-base">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-red-500">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-red-500 px-6 text-base font-extrabold text-white shadow-[0_10px_24px_rgba(239,68,68,0.28)] transition hover:-translate-y-0.5 sm:min-h-14 sm:px-8 sm:text-lg"
          >
            Cotizar
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="border-t-2 border-dashed border-slate-300 bg-slate-950 px-0 pt-2"
        >
          <div className="mx-auto grid max-w-[1500px] gap-1 xl:grid-cols-[minmax(0,1fr)_330px]">
            <div
              className="relative min-h-[540px] overflow-hidden sm:min-h-[620px] xl:min-h-[720px]"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(11,18,32,.9) 0%, rgba(11,18,32,.82) 32%, rgba(11,18,32,.56) 68%, rgba(11,18,32,.4) 100%), url(${heroImages[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_84%,rgba(248,113,113,.22),transparent_13%),linear-gradient(180deg,rgba(12,18,30,.12),rgba(12,18,30,.2))]" />

              <div className="relative flex h-full max-w-[780px] flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
                <p className="mb-5 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.08em] text-red-500 sm:mb-6 sm:text-lg">
                  <span className="h-1 w-8 bg-red-500 sm:w-12" />
                  Diseno y fabricacion
                </p>

                <h1 className="max-w-[10ch] text-[2.9rem] font-black leading-[0.92] tracking-[-0.08em] text-white sm:max-w-[9ch] sm:text-6xl lg:text-7xl xl:text-[6.2rem]">
                  Soluciones en <span className="block text-red-500">ACERO</span>
                </h1>

                <p className="mt-5 max-w-[36rem] text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8 lg:text-[1.45rem]">
                  Disenamos y fabricamos mobiliario de alta calidad con los
                  mejores materiales segun tus requisitos y necesidades.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#urbano"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-red-500 px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 sm:min-h-14 sm:px-8 sm:text-lg"
                  >
                    Ver Productos
                  </a>
                  <a
                    href="#contacto"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 sm:min-h-14 sm:px-8 sm:text-lg"
                  >
                    Cotizar Ahora
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-1 sm:grid-cols-2 xl:grid-cols-1 xl:grid-rows-2">
              {heroImages.slice(1).map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={
                    index === 0
                      ? 'Operario soldando en taller metalico'
                      : 'Detalle de estructuras de acero en fabricacion'
                  }
                  className="h-full min-h-[220px] w-full object-cover sm:min-h-[260px] xl:min-h-[280px]"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="urbano" className="bg-white px-4 py-14 sm:px-5 sm:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-[minmax(360px,610px)_minmax(0,1fr)] lg:gap-14">
            <div className="rounded-[2.8rem] border-[12px] border-slate-800 bg-slate-100 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.12)]">
              <img
                src={activeUrban.image}
                alt={activeUrban.title}
                className="h-full min-h-[320px] w-full rounded-[2rem] object-cover sm:min-h-[420px] lg:min-h-[520px]"
              />
            </div>

            <div>
              <span className="inline-block h-6 w-6 rounded-full bg-red-100" />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-slate-900">
                Espacios Publicos
              </p>
              <h2 className="mt-2 text-[2.4rem] font-black uppercase leading-[0.92] tracking-[-0.08em] text-slate-900 sm:text-5xl lg:text-6xl xl:text-[5.2rem]">
                <span className="block">{activeUrban.heading}</span>
                <span className="block text-red-500">{activeUrban.accent}</span>
              </h2>
              <p className="mt-5 max-w-[36rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {activeUrban.description}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {urbanCategories.map((item) => {
                  const isActive = activeUrban.id === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveUrban(item)}
                      className={`rounded-2xl px-5 py-5 text-left transition sm:px-6 sm:py-6 ${
                        isActive
                          ? 'border border-red-200 bg-red-50 shadow-[inset_4px_0_0_0_rgb(239,68,68)]'
                          : 'border border-slate-100 bg-slate-50 hover:border-red-100 hover:bg-red-50/40'
                      }`}
                    >
                      <h3 className="text-xl font-black text-slate-900 sm:text-2xl">{item.title}</h3>
                      <span className="mt-2 block text-sm font-bold uppercase tracking-[0.12em] text-slate-400">
                        {item.button}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="casa"
          className="bg-[radial-gradient(circle_at_bottom_right,rgba(51,65,85,0.25),transparent_20%),linear-gradient(180deg,#141c2d_0%,#101827_100%)] px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,.95fr)] lg:gap-16">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-400">
                Residencial
              </p>
              <h2 className="mt-5 max-w-[8ch] text-[2.6rem] font-black leading-[0.92] tracking-[-0.08em] sm:text-5xl lg:text-6xl xl:text-[5.2rem]">
                Casa o Complemento
              </h2>
              <p className="mt-6 max-w-[36rem] text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
                {activeResidential.description}
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10">
                {residentialCategories.map((item) => {
                  const isActive = activeResidential.id === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveResidential(item)}
                      className={`flex items-center gap-4 rounded-xl px-4 py-4 text-left transition sm:gap-5 sm:px-5 sm:py-5 ${
                        isActive
                          ? 'border border-slate-600 bg-slate-800'
                          : 'border border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800/85'
                      }`}
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-lg font-black text-white">
                        {item.id === 'escaleras'
                          ? '1'
                          : item.id === 'puertas'
                            ? '2'
                            : '3'}
                      </span>
                      <p className="text-lg font-black text-white sm:text-2xl">{item.title}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-5 sm:gap-7 md:grid-cols-2 md:items-center">
              {activeResidential.images.map((image, index) => (
                <div
                  key={image}
                  className={`relative overflow-hidden rounded-[1.7rem] border-2 border-slate-700 shadow-[0_16px_34px_rgba(2,6,23,0.26)] ${
                    index === 1 ? 'md:-translate-y-8' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${activeResidential.title} ${index + 1}`}
                    className="h-full min-h-[260px] w-full object-cover sm:min-h-[320px] lg:min-h-[370px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-6 pb-6 pt-16">
                    <p className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
                      {activeResidential.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="muebles" className="bg-slate-50 px-4 py-16 sm:px-5 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-red-500">
                Interior &amp; Exterior
              </p>
              <h2 className="mt-5 text-[3rem] font-black uppercase leading-[0.95] tracking-[-0.08em] text-slate-900 sm:text-6xl lg:text-7xl">
                Muebles
              </h2>
              <span className="mt-4 inline-block h-2 w-28 rounded-full bg-red-500" />
              <p className="mt-6 text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
                Fusionamos la resistencia del fierro con la calidez de la madera
                para crear piezas unicas.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {furnitureCategories.map((item, index) => (
                <article
                  key={item.id}
                  className="flex h-[560px] flex-col overflow-hidden rounded-[1.8rem] bg-[#363636] shadow-[0_20px_34px_rgba(15,23,42,0.14)] sm:h-[620px]"
                >
                  <div className="h-[360px] w-full overflow-hidden sm:h-[420px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex h-[200px] flex-col bg-[#363636] px-5 py-6 sm:h-[200px] sm:px-7 sm:py-7">
                    <span
                      className={`mb-4 inline-block h-3 w-3 rounded-full ${
                        index === 1 ? 'bg-red-500' : 'bg-violet-400'
                      }`}
                    />
                    <h3 className="text-3xl font-black text-white sm:text-4xl">{item.title}</h3>
                    <p className="mt-2 text-base text-slate-300 sm:text-lg">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="relative bg-[radial-gradient(circle_at_bottom_right,rgba(51,65,85,0.25),transparent_20%),linear-gradient(180deg,#141c2d_0%,#101827_100%)] px-4 pb-12 pt-9 text-slate-300 sm:px-5 lg:px-10"
      >
        <div className="absolute left-0 right-0 top-0 h-2 bg-red-500" />

        <div className="mx-auto grid max-w-[1500px] gap-10 pt-10 lg:grid-cols-[1.15fr_.95fr_1fr_1.2fr] lg:gap-12">
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <span className="text-[2rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[2.6rem]">
                360
              </span>
              <span className="border-2 border-red-500 px-2 py-1 text-[1.5rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[2rem]">
                IRON
              </span>
            </a>

            <p className="mt-6 max-w-[320px] text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Comunicate con nuestros ejecutivos por via WhatsApp o Email para
              recibir tu presupuesto personalizado.
            </p>

            <div className="mt-6 flex gap-4">
              <span className="h-5 w-5 rounded-full border border-slate-600 bg-slate-700/30" />
              <span className="h-5 w-5 rounded-full border border-slate-600 bg-slate-700/30" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Menu</h3>
            <span className="h-px w-20 bg-slate-600" />
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base text-slate-300 hover:text-white sm:text-lg">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Contacto</h3>
            <span className="h-px w-20 bg-slate-600" />
            <p className="text-base sm:text-lg">Santiago, Chile.</p>
            <p className="text-base sm:text-lg">Despachos a todo el pais.</p>
            <a href="tel:+56912345678" className="pt-2 text-base hover:text-white sm:text-lg">
              +56 9 1234 5678
            </a>
            <a href="mailto:contacto@360iron.cl" className="text-base hover:text-white sm:text-lg">
              contacto@360iron.cl
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white sm:text-3xl">Escribenos</h3>
            <span className="mt-4 block h-px w-28 bg-slate-600" />
            <form className="mt-7 grid gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="rounded-md border border-slate-700 bg-slate-800/80 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-slate-700 bg-slate-800/80 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400"
              />
              <textarea
                placeholder="Mensaje"
                rows="4"
                className="min-h-[110px] rounded-md border border-slate-700 bg-slate-800/80 px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-red-400"
              />
              <button
                type="button"
                className="min-h-12 rounded-md bg-red-600 px-6 text-base font-extrabold text-white transition hover:bg-red-500 sm:min-h-14 sm:text-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1500px] border-t border-slate-800 pt-8 text-center text-base text-slate-400 sm:mt-16 sm:text-lg">
          <p>© 2026 360IRON Proyectos de Acero. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
