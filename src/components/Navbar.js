import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },

];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigationClick = (href) => {
    setMobileMenuOpen(false); // Close the mobile menu
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white  bg-clip-padding blur-blackdrop-filter sticky top-0 z-40">
      <header>
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <a href="#" className=" -m-1.5 p-1.5">
              <span className="sr-only"></span>
              
                 <img class="h-6 w-auto absolute top-5 left-4 " src="/corpaza.png" alt="" />
            </a> 
          </div>



          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-black ">
                
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="https://wa.me/7034289684"className="flex-none rounded-md bg-purple-600 px-2 py-1 text-sm font-semibold leading-6 text-white">
                Get in Touch <span aria-hidden="true">&rarr;</span>
             
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-0" />
          <Dialog.Panel className=" fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5"></a>
              
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5  text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-black hover:bg-gray-50"
                      onClick={() => handleNavigationClick(item.href)}
                    >
                      {item.name}
                    
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="#https://wa.me/7034289684" className="-mx-3 flex-none rounded-md  bg-purple-600 px-3 py-2.5 text-base font-semibold leading-7 text-white">
                     Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
