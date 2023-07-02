import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
// export default function Header() {
//   const { data: session, status } = useSession()
//   const loading = status === "loading"

//   return (
//     <header>
//       <noscript>
//         <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
//       </noscript>
//       <div className={styles.signedInStatus}>
//         <p
//           className={`nojs-show ${
//             !session && loading ? styles.loading : styles.loaded
//           }`}
//         >
//           {!session && (
//             <>
//               <span className={styles.notSignedInText}>
//                 You are not signed in
//               </span>
//               <a
//                 href={`/api/auth/signin`}
//                 className={styles.buttonPrimary}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signIn()
//                 }}
//               >
//                 Sign in
//               </a>
//             </>
//           )}
//           {session?.user && (
//             <>
//               {session.user.image && (
//                 <span
//                   style={{ backgroundImage: `url('${session.user.image}')` }}
//                   className={styles.avatar}
//                 />
//               )}
//               <span className={styles.signedInText}>
//                 <small>Signed in as</small>
//                 <br />
//                 <strong>{session.user.email ?? session.user.name}</strong>
//               </span>
//               <a
//                 href={`/api/auth/signout`}
//                 className={styles.button}
//                 onClick={(e) => {
//                   e.preventDefault()
//                   signOut()
//                 }}
//               >
//                 Sign out
//               </a>
//             </>
//           )}
//         </p>
//       </div>
//       <nav>
//         <ul className={styles.navItems}>
//           <li className={styles.navItem}>
//             <Link href="/">Home</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/client">Client</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/server">Server</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/protected">Protected</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/api-example">API</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/admin">Admin</Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/me">Me</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

/* eslint-disable @next/next/no-img-element */
//Navbar.tsx

import { useState } from "react"
import { Dialog, Disclosure, Popover } from "@headlessui/react"
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header className="fixed w-full bg-primary-black">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-auto h-16" src="https://img.icons8.com/?size=512&id=81028&format=png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-white gap-x-1">
              Product
            </Popover.Button>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Company
          </a>
        </Popover.Group> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10">
          <MagnifyingGlassIcon className="text-sm font-semibold leading-6 w-6 h-6 text-white"/>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Sign in
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-primary-black sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="w-auto h-8"
                src="https://img.icons8.com/?size=512&id=81028&format=png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-slate-800">
                        Product
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-slate-800"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-slate-800"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-slate-800"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  )
}

